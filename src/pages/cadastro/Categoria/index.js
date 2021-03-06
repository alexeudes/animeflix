import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const initialValues = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(event) {
        // const { getAttribute, value } = event.target;
        const name = event.target.getAttribute('name');
        const value = event.target.value;

        setValue(
            name,
            value
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
            ...categorias,
            values,
        ]);

        setValues(initialValues);
    }

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria: {values.nome}
            </h1>

            <form onSubmit={handleSubmit}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição:
                    <textarea type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                {/* <div>
                    <label>
                        Cor:
                    <input type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;