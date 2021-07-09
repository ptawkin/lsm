import './Form.scss'

function Form() {
    return (
        <div className={'Form'}>
            <form className={'Form__form'}>
                <div className={'Form__row Form__row_input-name'}>
                    <div className={'Form_input-heading'}>
                        Ваше имя
                    </div>

                    <input className={'Form__input Form__input-name'}
                           type="text"
                           placeholder={'Иван Иванов'}
                    />
                </div>

                <div className={'Form__row Form__row_input-tel'}>
                    <div className={'Form_input-heading'}>
                        Ваш телефон
                    </div>

                    <input className={'Form__input Form__input-tel'}
                           type="text"
                           placeholder={'+7 (999) 999-99-99'}
                    />

                </div>

                <div className={'Form__row Form__row_consent'}>
                    <input className={'Form__input Form__input_checkbox'}
                        type="checkbox"
                           name={'checkbox'}
                           id={'checkbox'}
                    />

                    <label className={'Form__checkbox-text'}
                    for={'checkbox'}>
                        Я даю согласие на обработку персональных данных, я ознакомился Политикой конфиденциальности
                    </label>
                </div>

                <div className={'Form__row Form__row_submit'}>
                    <button className={'Form__button'}
                            type="submit"
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;