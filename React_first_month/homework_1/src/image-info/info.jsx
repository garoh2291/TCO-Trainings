import { InfoItem } from './info-item'
import './info.css'


export function InfoDiv() {
    return (
        <div className='info-div'>
            <InfoItem src="https://onex.am/img/svg/step1.svg" text ="Գրանցվե՛ք մեր կայքում
և անվճար ստացե՛ք առաքման հասցեներ" />
            <InfoItem src="https://onex.am/img/svg/step2.svg" text ="Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս" />
            <InfoItem src="https://onex.am/img/svg/step3.svg" text ="Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում" />
        </div>
    )
}