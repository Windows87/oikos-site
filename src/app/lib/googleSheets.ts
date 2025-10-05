export const SHEETS_CONFIG = {
    EVENTS_SHEET_ID: '1Jf8im7xKS8OYNhv79NhG4j8mwEBcUiPURxp55iM8nek',
    GID: '0'
};

export interface EventData {
    day: string;
    month: string;
    title: string;
    time: string;
    location: string;
    imageUrl: string;
    subscriptionDate?: string;
    link: string;
}

export async function fetchEventsFromGoogleSheets(): Promise<EventData[]> {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEETS_CONFIG.EVENTS_SHEET_ID}/export?format=csv&gid=${SHEETS_CONFIG.GID}`;
    
    try {
        const response = await fetch(csvUrl, {
            mode: 'cors',
            headers: {
                'Accept': 'text/csv',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvData = await response.text();
        return parseEventsFromCSV(csvData);
    } catch (error) {
        console.error('Erro ao buscar eventos do Google Sheets:', error);
        throw error;
    }
}

function parseEventsFromCSV(csvData: string): EventData[] {
    const rows = csvData.split('\n').filter(row => row.trim());
    
    const dataRows = rows.slice(1);
    
    return dataRows.map(row => {
        const columns = parseCSVRow(row);
        return {
            day: columns[1] || '',
            month: columns[2] || '',
            title: columns[0] || '',
            time: columns[3] || '',
            location:'Avenida Doutor Carlos Botelho, 2626 - Centro',
            imageUrl: columns[4] || '',
            link: columns[5] || '#',
            subscriptionDate: columns[6] || undefined,
        };
    }).filter(event => event.title && event.title.trim() !== '' && event.title !== 'Evento');
}

function parseCSVRow(row: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < row.length; i++) {
        const char = row[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    if (current) {
        result.push(current.trim());
    }
    
    return result.map(col => col.replace(/^"(.*)"$/, '$1'));
}