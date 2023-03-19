import {useState} from 'react'
import './App.css';
import Modal from "./component/modal.jsx";

function App() {
    const [modalActive, setModalActive] = useState(true);
    return (
        <div className="App">
            <main>
                <button className="open-btn" onClick={() => setModalActive(true)}>Открыть модальное окно</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci atque dolor doloremque
                    error, eum fugit, illum impedit itaque laudantium libero molestias quasi, quis rerum suscipit
                    tempora voluptas voluptate voluptatum?</p>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores dolores nostrum odit perspiciatis quos saepe,
                    voluptates! A ab aliquam assumenda beatae commodi corporis
                    cum cupiditate, eos illum iure maxime molestiae mollitia
                    nemo nisi non obcaecati officiis placeat praesentium,
                    quae repellat, repellendus unde voluptas. Eos fugiat
                    fugit laudantium, perspiciatis possimus quam quos
                    repellat repudiandae unde veritatis. Consectetur culpa
                    illum ipsa, omnis porro quasi quis repellendus veniam
                    vero. Aliquid animi consequuntur explicabo, maiores
                    molestias vel! Aliquam aperiam eos iste laudantium maxime
                    nulla vitae. Ad delectus, dolore eos et eum excepturi
                    expedita, fugiat itaque libero maxime modi molestiae omnis
                    provident recusandae sit voluptates!
                </p>
            </Modal>
        </div>
    )
}

export default App
