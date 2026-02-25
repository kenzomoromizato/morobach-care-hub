import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ClipboardList, Target, RefreshCw } from "lucide-react";

const steps = [
{ icon: Calendar, title: "Agendamento", number: "01" },
{ icon: ClipboardList, title: "Avaliação domiciliar completa", number: "02" },
{ icon: Target, title: "Plano preventivo individualizado", number: "03" },
{ icon: RefreshCw, title: "Acompanhamento contínuo", number: "04" }];


const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return;
































};

export default HowItWorksSection;