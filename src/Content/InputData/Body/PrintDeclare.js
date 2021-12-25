import Pdf from '../Body/mau.pdf';
import '../Body/PrintDeclare.css';

export default function PrintDeclare() {
    return (
        <div>
            <iframe src={Pdf} height="100%" width="100%"/>
        </div>
    )
}
