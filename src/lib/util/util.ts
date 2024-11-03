export function isIndex(index: number): boolean {
    return (index === 2 || index === 3);
}

export function generateDataGraph(cant: number): number[] {
    const data: number[] = [];

    for (let i=0; i<= cant; i++) {
        const value = Math.random() * (i + 1);

        data.push(value);
    }

    return data;
}

export function generateDataLabel(years: string[]): string[] {
    const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labels: string[] = [];


    for (let i=0; i <= years.length - 1; i++) {
        for (let j = 0; j <= months.length - 1; j++) {
            labels.push(`${months[j]}-${years[i]}`);
        }
    }

    return labels;
}
