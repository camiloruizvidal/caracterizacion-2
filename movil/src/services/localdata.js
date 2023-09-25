class localdata {

    getItem(key) {
        try {
            const filePath = `dataLocalData/${key}.txt`;
            const xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, false);
            xhr.send(null);

            if (xhr.status === 200) {
                return xhr.responseText;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    setItem(key, value) {
        try {
            const filePath = `dataLocalData/${key}.txt`;
            const blob = new Blob([value], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filePath;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            throw error;
        }
    }

    removeItem(key) {
        try {
            const filePath = `dataLocalData/${key}.txt`;
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', filePath, false);
            xhr.send(null);

            if (xhr.status !== 200) {
                throw new Error(`Error al eliminar el archivo: ${filePath}`);
            }
        } catch (error) {
            throw error;
        }
    }
}

export default new localdata();
