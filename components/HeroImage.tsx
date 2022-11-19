import DoctorStrange from "public/images/doctor-strange.jpeg";
import Hulk from "public/images/hulk.webp";
import Thanos from "public/images/thanos.jpeg";
import Vision from "public/images/thanos.jpeg";
import ScarletWitch from "public/images/scarlet-witch.jpeg";
import Loki from "public/images/loki.jpeg";
import SpiderMan from "public/images/spider-man.webp";
import Hawkeye from "public/images/hawkeye.jpeg";
import CaptainAmerica from "public/images/captain-america.jpeg";
import CaptainMarvel from "public/images/captain-marvel.jpeg";
import AntMan from "public/images/ant-man.jpeg";
import BlackWidow from "public/images/black-widow.jpeg";
import BlackPanther from "public/images/black-panther.jpeg";
import StarLord from "public/images/star-lord.png";
import Thor from "public/images/thor.jpeg";
import IronMan from "public/images/iron-man.jpeg";

import Image from "next/image";

function ResultImage({ code }: { code: string }) {
  const getImage = () => {
    switch (code) {
      case "INTJ":
        return DoctorStrange;
      case "INTP":
        return Hulk;
      case "ENTJ":
        return Thanos;
      case "INFJ":
        return Vision;
      case "INFP":
        return ScarletWitch;
      case "ENFJ":
        return Loki;
      case "ENFP":
        return SpiderMan;
      case "ISTJ":
        return Hawkeye;
      case "ISFJ":
        return CaptainAmerica;
      case "ESTJ":
        return CaptainMarvel;
      case "ESFJ":
        return AntMan;
      case "ISTP":
        return BlackWidow;
      case "ISFP":
        return BlackPanther;
      case "ESTP":
        return StarLord;
      case "ESFP":
        return Thor;
      case "ENTP":
        return IronMan;
      default:
        return "";
    }
  };
  return <Image src={getImage()} alt="marvel" />;
}

export default ResultImage;