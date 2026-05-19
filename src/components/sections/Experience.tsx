import { motion } from "motion/react";
import { Briefcase, GraduationCap, Star } from "lucide-react";

const experiences = [
  {
    date: "2024.11 - 2025.9",
    company: "绮梦新堂（上海）体育管理有限公司",
    role: "摄像师 / 剪辑 / 视觉策划",
    description: "策划并执行拍摄计划，打造俱乐部网球教练个人IP账号，3个月课程转化率提升30%。协调球馆与品牌活动，负责进度把控、视觉方案策划及后期制作。拍摄剪辑涵盖各类运动/汽车品牌订货会、宣传片及纪录片。",
  },
  {
    date: "2024.4 - 2024.9",
    company: "上海多玛食品有限公司 ELECTORX",
    role: "品牌摄像师 / 视觉策划 / 直播搭建",
    description: "负责品牌线下活动、挚友纪录片及社交平台视频拍摄后期。确保视觉质量符合品牌调性，制定拍摄方案与统筹RUNDOWN。同时负责直播间场景搭建与灯光调试。",
  },
  {
    date: "2023.3 - 2024.3",
    company: "上海炬点电子商务有限公司 外资DP",
    role: "摄像师 / 灯光师 / 直播搭建",
    description: "负责项目整体拍摄与后期。涵盖千川短视频、品牌视频的素材制作，为平台投放提供有力支持。同时负责直播技术保障，创造独特的灯光场景效果。",
  },
];

const education = [
  {
    date: "2019.09 - 2023.01",
    school: "陕西师范大学",
    major: "行政管理 (大专)",
  }
];

const strengths = [
  "7年专业视觉内容制作经验，专注品牌视觉构建与时尚/电商/汽车领域。",
  "深厚的审美功底与视觉表现力，严谨的灯光把控与独特的镜头语言视角。",
  "熟练操作 SONY、CANON、RED 等各品牌专业摄像机及灯光设备。",
  "精通 PS、FCPX、AE、AI 等影视后期全流程软件。",
  "具备从创意策划到执行落地的全流程管理能力，拥有丰富的团队协作经验。"
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-24 py-10">
      {/* Work Experience */}
      <section>
        <div className="flex items-center gap-2 mb-10 text-gray-400">
          <Briefcase className="w-5 h-5" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase">工作经验 / EXPERIENCE</h2>
        </div>
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6"
            >
              <div className="text-sm text-gray-400 font-mono pt-1">
                {exp.date}
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                </div>
                <p className="text-blue-600 font-medium text-sm">{exp.role}</p>
                <p className="text-gray-500 leading-relaxed font-light text-[15px]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center gap-2 mb-10 text-gray-400">
          <GraduationCap className="w-5 h-5" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase">教育背景 / EDUCATION</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6"
            >
              <div className="text-sm text-gray-400 font-mono">
                {edu.date}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                <p className="text-gray-500 text-sm">{edu.major}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Strengths */}
      <section className="bg-gray-50 rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-8 text-gray-400">
          <Star className="w-5 h-5 fill-gray-400" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase">个人优势 / ADVANTAGES</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {strengths.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex gap-4 items-start group"
            >
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
