import Select from 'react-select';
import './App.css';
import React, { useState } from 'react'
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
var storyResponse = "";
var storyResponse2 = "";
var storyResponse3 = "";
var storyResponse4 = "";
var storyResponse5 = "";
var storyResponse6 = "";
var storyResponse7 = "";
var storyResponse8 = "";
var storyResponse9 = "";
var storyResponse10 = "";
var count = 1;
var data1 = "";
var data2 = "";
var data3 = "";
var data4 = "";
var data5 = "";
var data6 = "";
var data7 = "";
var data8 = "";
var data9 = "";
var data10 = "";
var engine = "";
function App() {

    const options = [
        { value: 'text-davinci-002', label: 'text-davinci-002' },
        { value: 'text-curie-001', label: 'text-curie-001' },
        { value: 'text-babbage-001', label: 'text-babbage-001' },
        { value: 'text-ada-001', label: 'text-ada-001' }
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false);
    const [print2, setPrint2] = useState(false);
    const [print3, setPrint3] = useState(false);
    const [print4, setPrint4] = useState(false);
    const [print5, setPrint5] = useState(false);
    const [print6, setPrint6] = useState(false);
    const [print7, setPrint7] = useState(false);
    const [print8, setPrint8] = useState(false);
    const [print9, setPrint9] = useState(false);
    const [print10, setPrint10] = useState(false);

    async function getStory(data) {

        if (selectedOption === undefined || selectedOption == null) {
            engine = 'text-curie-001'
        } else {
            engine = selectedOption.value;
        }

        const response = await openai.createCompletion(engine, {
            prompt: data,
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        if (count == 1) {
            storyResponse = response.data.choices[0].text;
        } else if (count == 2) {
            storyResponse2 = response.data.choices[0].text;
        } else if (count == 3) {
            storyResponse3 = response.data.choices[0].text;
        } else if (count == 4) {
            storyResponse4 = response.data.choices[0].text;
        } else if (count == 5) {
            storyResponse5 = response.data.choices[0].text;
        } else if (count == 6) {
            storyResponse6 = response.data.choices[0].text;
        } else if (count == 7) {
            storyResponse7 = response.data.choices[0].text;
        } else if (count == 8) {
            storyResponse8 = response.data.choices[0].text;
        } else if (count == 9) {
            storyResponse9 = response.data.choices[0].text;
        } else if (count == 10) {
            storyResponse10 = response.data.choices[0].text;
        } else if (count == 11) {
            setPrint(false);
            setPrint2(false);
            setPrint3(false);
            setPrint4(false);
            setPrint5(false);
            setPrint6(false);
            setPrint7(false);
            setPrint8(false);
            setPrint9(false);
            setPrint10(false);
            count = 1;
            storyResponse = response.data.choices[0].text;
            console.log(storyResponse)
        }
        waitAndSet();
    }

    function getData(val) {
        setData(val.target.value)
    }

    async function waitAndSet() {
        if (count == 1) {
            data1 = data;
            setPrint(true);
        } else if (count == 2) {
            setPrint2(true);
            data2 = data;
        } else if (count == 3) {
            setPrint3(true);
            data3 = data;
        } else if (count == 4) {
            setPrint4(true);
            data4 = data;
        } else if (count == 5) {
            setPrint5(true);
            data5 = data;
        } else if (count == 6) {
            setPrint6(true);
            data6 = data;
        } else if (count == 7) {
            setPrint7(true);
            data7 = data;
        } else if (count == 8) {
            setPrint8(true);
            data8 = data;
        } else if (count == 9) {
            setPrint9(true);
            data9 = data;
        } else if (count == 10) {
            setPrint10(true);
            data10 = data;
        }
        count++;
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 > Fun with AI </h1>
                <p className="idea"> Enter a prompt </p>
                <input className="input" type="text" onChange={getData} />


                <div>
                    <span>
                        <Select className="dropDownBox"
                            defaultValue={options[1]}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </span>
                    <span>
                        <button className="button" onClick={
                            () => {
                                getStory(data);
                            }
                        }> Click Me </button>
                    </span>

                </div>




                <h1 className="title"> Responses </h1>
                {
                    print10 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data10}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse10} </span> </p>
                        </div>
                        : null
                }

                {
                    print9 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data9}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse9} </span> </p>
                        </div>
                        : null
                }

                {
                    print8 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data8}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse8} </span> </p>
                        </div>
                        : null
                }

                {
                    print7 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data7}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse7} </span> </p>
                        </div>
                        : null
                }

                {
                    print6 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data6}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse6} </span> </p>
                        </div>
                        : null
                }

                {
                    print5 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data5}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse5} </span> </p>
                        </div>
                        : null
                }

                {
                    print4 ?
                        <div className="textHolder4">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data4}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse4} </span> </p>
                        </div>
                        : null
                }

                {
                    print3 ?
                        <div className="textHolder3">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data3}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse3} </span> </p>
                        </div>
                        : null
                }

                {
                    print2 ?
                        <div className="textHolder2">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data2}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse2} </span> </p>
                        </div>
                        : null
                }

                {
                    print ?
                        <div className="textHolder">
                            <p><span className="prompt">Prompt:</span><span className="response"> {data1}</span></p>

                            <p> <span className="prompt"> Response: </span><span className="response"> {storyResponse} </span> </p>
                        </div>
                        : null
                }
            </header>
        </div>
    );
}

export default App;
