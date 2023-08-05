import { styled } from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    min-width: 350px;

    border: 1px solid black;
    border-radius: 5px;
    background-color: white;

    h2{
        text-align: center;
    }

    label{
        display: block;
        width: 100%;
    }

    input{
        width: 100%;
    }

    .form{
        padding-bottom: 10px;

        section{
            margin-top: 10px;
            &:first-child{
                margin-top: 0px;
            }

            label{
                display: block;
                width: 100%;
                text-transform: capitalize;
            }

            input{
                width: 100%;
                padding: 5px 5px;
            }
        }
        
        button{
            width: 100%;
            margin-top: 10px;
            padding: 5px;
        }
    }

    .search{
        input{
            padding: 5px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
        }
    }

    .contacts{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 200px;

        .empty{
            color: gray;
        }
        
        ul{
            margin-top: 20px;
            height: 200px;
            width: 100%;
            padding: 5px;

            list-style-type: none;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #888;
                border-radius: 5px;
            }

            li{
                display: flex;

                margin-top: 5px;
                padding: 5px;

                border-bottom: .1px solid black;

                &:hover{
                    background-color: lightgray;
                }

                p{
                    margin-right: 10px;
                }

                button{
                    margin-left: auto;
                    cursor: pointer;
                    padding: 0px 5px;
                }
            }
        }
    }
`
