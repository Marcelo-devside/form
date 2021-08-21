import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Input from './Form/Input'

interface FormData {
  name: string
  email: string
}
// const initialData = {
//   cep: fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then((res) => res.json())
//       .then((data) => console.log(data.logradouro))
  

// }

export default function MyForm() {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = data => {
    
    console.log(data)
  }
  function onBlurCep(){
    
  }

  return (
     <div className='alignment'>
            <section className='context'>
                <h1>DESAFIO GAMA ACADEMY</h1>
                <p>
                    Esta aplicação full stack é para fins acadêmicos, sobre tudo, para conclusão do curso ministrado pela Gama Academy. 
                </p>
                <p>
                O desenvolvimento desta aplicação foi eleborado com algumas das ferramentas e linguagens mais utilizadas do mercado de tecnologia na época em que foi concebida. 
                </p>
                <p>
                    O objetivo do desafio foi elaborar um formulário de cadastro de currículos afim de serem armazenados em um banco de dados além de conter algumas regras de negócios como validações e integrações com API's.
                </p>               
          </section>
              <Form ref={formRef} /*initialData={}*/ onSubmit={handleSubmit}>
           <section className='style-upform'>
                     <h3>FORMULÁRIO DE CANDIDATURA</h3>
                <Input type="text" name="cpf" id='input-cpf' maxLength={11}/>
                <Input type="text" name="identidade" id='input-identidade'/>
                <Input type="text" name="name" id='input-nome'/>
                <Input type="text" name="profession" id='input-profissao'/>
                <Input type="text" name="possuiVeiculo" id='input-veiculo'/>
                <Input type="text" name="possuihabilitacao" id='input-habilitacao'/>
                <Input type="text" name="cargoPretendido" id='input-cargo' />
                <Input type="date" name="birthday" id='input-nascimento' />
                <Input type="text" name="estadoCivil" id='input-civil' />
                <Input type="text" name="sexo" id='input-sexo' />
                <Input type="text" name="zipcode" id='input-cep' maxLength={8} onBlur={onBlurCep}  />
                <Input type="text" name="logradouro" id='input-endereco' placeholder='ex: Nome da Rua, 56 Bloco 2, AP 301' />
                <Input type="text"name="bairro" id='input-bairro' />
                <Input type="text"name="city" id='input-cidade' />
                <Input type="text"name="complemento" id='input-complemento'/>
                <Input type="text"name="uf" id='input-uf' />
                <Input type="text"name="telefone" id='input-telefone' placeholder='ex: (11) 1234-1829' />
                <Input type="text"name="celular" id='input-celular' placeholder='ex: (11) 99345-1829' />
                <Input type="mail"name="email" id='input-mail' />
                <button id='styleButton' type="submit">EVIAR</button>
          </section>
              </Form>
    </div>        
  )
}



























// import React, {useState} from 'react'

//  export default function Former(){
//     const [formValues, setFormVelues]:any = useState({})
//     const handleInputChange = (e: any) => {
//         const {name, value}: any = e.target
//         setFormVelues({...formValues, [name]: value})
//     }
//     const handleSubmit = (e:any) => {
//         e.preventDefault()
//         const formData = new FormData(e.target)
//         const data = Object.fromEntries(formData)
//         console.log('*** handleSubmit', data)
//     }
//     function onBlurCep(e: any) {
        // const {value} = e.target;
        // const cep = value.replace(/[^0-9]/g, '')
        // if(cep?.length !== 8){
        //     return;
        // }
        // fetch(`https://viacep.com.br/ws/${cep}/json/`)
        // .then((res) => res.json())
        // .then((data) => console.log(data.logradouro))
//         }
//         return (
        
            // <div className='alignment'>
            //     <section className='context'>
            //          <h1>DESAFIO GAMA ACADEMY</h1>
            //          <p>
            //              Esta aplicação full stack é para fins acadêmicos, sobre tudo, para conclusão do curso ministrado pela Gama Academy. 
            //          </p>
            //          <p>
            //          O desenvolvimento desta aplicação foi eleborado com algumas das ferramentas e linguagens mais utilizadas do mercado de tecnologia na época em que foi concebida. 
            //          </p>
            //          <p>
            //              O objetivo do desafio foi elaborar um formulário de cadastro de currículos afim de serem armazenados em um banco de dados além de conter algumas regras de negócios como validações e integrações com API's.
            //          </p>               
            //     </section>
//             <form onSubmit= {handleSubmit}>               
              //  <section className='style-upform'>
              //        <h3>FORMULÁRIO DE CANDIDATURA</h3>
//                      <div className='fields'>
//                             <div className='style-label2'>
                                // <label htmlFor="input-cpf">
//                                     CPF
//                                 </label>
//                             </div>
                                // <input type="text" name='cpf' id='input-cpf'
//                                 maxLength={11} onChange={handleInputChange} value={formValues.cpf ||''} />
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-identidade">
//                                     IDENTIDADE
//                                 </label>
//                             </div>
                                // <input type="text" name='identidade' id='input-identidade'
//                                 maxLength={9} onChange={handleInputChange} value={formValues.identidade ||''} />
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-nome">
//                                     NOME
//                                 </label>
//                             </div>
//                                 <input type="text" name='nome' id='input-nome'
//                                 onChange={handleInputChange} value={formValues.nome ||''} />
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-profissao">
//                                     PROFISSÃO
//                                 </label>
//                             </div>
//                                 <input type="text" name='profissao' id='input-profissao' 
//                                 onChange={handleInputChange} value={formValues.profissao ||''} />
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-veiculo">
//                                     POSSUI VEÍCULO
//                                 </label>
//                             </div>
//                                     <select name="PossuiVeiculo" id="input-veiculo" 
//                                     onChange={handleInputChange} value={formValues.PossuiVeiculo || ''}>
//                                         <option value="">Selecionar</option>
//                                         <option value="nao">Não</option>
//                                         <option value="sim">Sim</option>
//                                     </select>
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-habilitacao">
//                                     POSSUI HABILITAÇÃO
//                                 </label>
//                             </div>
//                             <select name="habilitacao" id="input-habilitacao" 
//                             onChange={handleInputChange} value={formValues.habilitacao || ''}>
//                                 <option value="">Selecionar</option>
//                                 <option value="nao">Não</option>
//                                 <option value="sim">Sim</option>
//                              </select>
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-cargo">
//                                     CARGO PRETENDIDO
//                                 </label>
//                             </div>
//                                 <input type="text" name='CargoPretendido' id='input-cargo'
//                                 onChange={handleInputChange} value={formValues.CargoPretendido ||''}/>
//                         </div>
//                         <div className='fields'>
//                             <div className='style-label'>
//                                 <label htmlFor="input-nascimento">
//                                     DATA DE NASCIMENTO
//                                 </label>
//                             </div>
//                                 <input type="date" name='birthday' id='input-nascimento'
                                // onChange={handleInputChange} value={formValues.birthday ||''} placeholder='ex: 15/08/2011'/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-civil">
//                                      ESTADO CIVIL
//                                  </label>
//                              </div>
//                              <select name="EstadoCivil" id="input-civil" 
//                              onChange={handleInputChange} value={formValues.EstadoCivil || ''}>
//                                 <option value="">Selecionar</option>
//                                 <option value="solteiro">Solteiro(a)</option>
//                                 <option value="casado">Casado(a)</option>
//                                 <option value="divorciado">Divorciado(a)</option>
//                              </select>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-sexo">
//                                      SEXO
//                                  </label>
//                              </div>
//                              <select name="sexo" id="input-sexo"
//                             onChange={handleInputChange} value={formValues.sexo || ''}>
//                                 <option value="">Selecionar</option>
//                                 <option value="masculino">Masculino</option>
//                                 <option value="femenino">Feminino</option>
//                                 <option value="outro gênero">Outro gênero</option>
//                                 <option value="optou nao declarar">Não declarar</option>
//                              </select>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-cep">
//                                      CEP
//                                  </label>
//                              </div>
//                                  <input type="text" name='cep' id='input-cep'
                                //  maxLength={8} onBlur={ onBlurCep} onChange={handleInputChange} value={formValues.cep ||''}/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-endereco">
//                                      ENDEREÇO
//                                  </label>
//                              </div>
//                                  <input type="text" name='endereco' id='input-endereco'
                                //  onChange={handleInputChange} value={formValues.endereco ||''} placeholder='ex: Nome da Rua, 56 Bloco 2, AP 301'/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-bairro">
//                                      BAIRRO
//                                  </label>
//                              </div>
//                                  <input type="text" name='bairro' id='input-bairro'
//                                  onChange={handleInputChange} value={formValues.bairro ||''}/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-cidade">
//                                      CIDADE
//                                  </label>
//                              </div>
//                                  <input type="text" name='cidade' id='input-cidade'
//                                  onChange={handleInputChange} value={formValues.cidade ||''}/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-telefone">
//                                      TELEFONE FIXO
//                                  </label>
//                              </div>
//                                  <input type="text" name='telefone' id='input-telefone'
                                //  onChange={handleInputChange} value={formValues.telefone ||''} placeholder='ex: (11) 1234-1829'/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-celular">
//                                      CELULAR
//                                  </label>
//                              </div>
//                                  <input type="text" name='celular' id='input-celular'
                                //  onChange={handleInputChange} value={formValues.celular ||''} placeholder='ex: (11) 99345-1829'/>
//                          </div>
//                          <div className='fields'>
//                              <div className='style-label'>
//                                  <label htmlFor="input-url">
//                                      E-MAIL
//                                  </label>
//                              </div>
//                                  <input type="email" name='Email' id='input-url'
//                                  onChange={handleInputChange} value={formValues.Email ||''} placeholder='ex: myname@example.com'/>
//                          </div>
//                              <button id='styleButton' type="submit">ENVIAR</button>
//                     </section>
//             </form>
//         </div>
//     )
// }
            
            
            




