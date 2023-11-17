import React from 'react'
import { Link } from 'react-router-dom'

//css
import styles from "./Verification.module.css"

//componentes
import Nav from '../../components/Nav'

const Verification = () => {
  return (
    <div className={styles.verification_container}>

        <div className={styles.clientInfo_container}>
            <header> 
                <h1>CLSEDSHOP</h1>

                <div className={styles.clientShop_summary}>
                    
                </div>

                <nav>
                    <div>
                        <Link>Carrinho</Link><span class="material-symbols-outlined">navigate_next</span>
                    </div>
                    <div>
                        <span>Informações</span><span class="material-symbols-outlined">navigate_next</span>
                    </div>
                    <div>
                        <span>Frete</span><span class="material-symbols-outlined">navigate_next</span>
                    </div>
                    <div>
                        <span>Pagamento</span><span class="material-symbols-outlined">navigate_next</span>
                    </div>
                </nav>
            </header>

            <form>
                <div className={styles.clientInfo_contact}>
                    <label>
                        <h4>Contato</h4>
                        <input placeholder='E-mail ou número de celular' type="text" />
                    </label>
                </div>
                
                <div className={styles.clientInfo_adress}>
                    <h4>Endereço de Entrega</h4>
                    <select  name="country" id="country">
                        <option value="Brasil">Brasil</option>
                        <option value="USA">USA</option>
                    </select>
                    <input placeholder='Nome Completo' type="text" />
                    <input placeholder='Rua e número da casa' type="text" />
                    <input placeholder='Apartamento, bloco ou ref.' type="text" />
                    <input placeholder='Cidade' type="text" />
                    <select  name="state" id="state">
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                    </select>
                    <input placeholder='CEP' type="number" />
                    <input placeholder='Telefone' type="tel" />
                </div>

                <div className={styles.clientInfo_buttons}>
                    <button type='submit'> Continuar com o frete</button>
                    <Link to={'/cart'}> Voltar ao carrinho</Link>
                </div>

            </form>

        </div>

        <div className={styles.clientShop_container}></div>

    </div>
  )
}

export default Verification
