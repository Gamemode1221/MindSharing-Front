import React, { useState } from 'react';
import axios from 'axios';

function InputForm() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/test', {text1, text2, text3})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Text1:
                <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
            </label>
            <label>
                Text2:
                <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
            </label>
            <label>
                Text3:
                <input type="text" value={text3} onChange={(e) => setText3(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
export default InputForm;