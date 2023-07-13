import Container from '@/components/Container/Container'
import React from 'react'

export default function PartnersForm() {
    return (
        <section id="partnersForm">
            <Container>
                <div className="partnerFormPanel">
                    <h2></h2>
                    <p></p>
                    <form action="">
                        <div className="formInnerPanel">
                            <div className="formInner">
                                <input type="text" />
                            </div>
                            <div className="formInner">
                                <input type="text" />
                            </div>
                        </div>
                        <button type='submit'>Become a Partner</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}
