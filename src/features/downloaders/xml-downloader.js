


export function xmlDownloader(data) {
    if (data.length === 0) return;
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += `<amin83th>\n`;

    for (const item of data) {
        xml += `  <user>\n`;
        for (const [key, value] of Object.entries(item)) {
            // اگر مقدار شامل کاراکترهای خاص بود، CDATA استفاده کن
            const safeValue = typeof value === 'string' && (value.includes('<') || value.includes('>') || value.includes('&'))
                ? `<![CDATA[${value}]]>`
                : value;
            xml += `    <${key}>${safeValue}</${key}>\n`;
        }
        xml += `  </user>\n`;
    }

    xml += `</amin83th>`;

    // دانلود
    const blob = new Blob(['\uFEFF' + xml], { type: 'application/xml;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "XmlOutput";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}