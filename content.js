/*
 * 网站内容编辑区（V1）
 * 日常修改优先在这里完成，不需要编辑 HTML。
 * 只修改引号内文字；需要换行可保留 <br>，强调可保留 <em>。
 */
(() => {
  const SITE_CONTENT = {
    shared: {
      ".sidebar-kicker": "AI PRODUCT · BUSINESS SYSTEMS",
      ".sidebar-intro h1": "李七月 <span>Sally</span>",
      ".sidebar-intro h2": "AI 产品经理<br><em>企业级 AI 应用与业务流程智能化</em>",
      ".sidebar-intro .sidebar-summary": "从业务问题出发，完成 AI 产品规划、应用架构设计与质量验证。理解业务流程与技术边界，设计规则、模型、工具和人的协作方式。",
    },
    home: {
      "#about .section-title": "从业务问题出发，<br><em>设计可验证的 AI 产品方案。</em>",
      "#about .intro-copy p:nth-child(1)": "具备 CRM 实施、软件测试、B 端产品与 AI 产品运营经历，并通过独立原型持续验证 AI 应用设计。能够从业务调研与流程建模出发，梳理角色、数据、规则和异常路径，形成可实现、可测试的产品方案。",
      "#about .intro-copy p:nth-child(2)": "重点能力：企业业务抽象、规则 / LLM / RAG 分层设计、上下文与工作流管理、人工接管机制、评测与缺陷闭环。目标岗位：AI 应用产品经理、企业服务 / 客户运营 AI 产品经理、业务流程 Agent 产品经理。"
    },
    resume: {
      ".resume-hero h1": "李七月 <em>｜AI 产品经理</em>",
      ".resume-summary": "计算机科学与技术本科、工商管理硕士，具备 CRM 实施、软件测试、B 端产品与 AI 产品运营经历。擅长复杂业务建模、AI 应用产品规划、规则 / LLM / RAG 协同设计、工作流与状态管理、原型验证及质量评测；能够将业务目标转化为技术可实现、风险可控、结果可验收的产品方案。",
      ".resume-contact": "目标岗位：AI 应用产品经理｜企业服务 · 客户运营 · 业务流程 Agent"
    },
    ees: {
      ".case-hero h1": "EES 酒店与民宿<br><em>AI 智能服务工作流</em>",
      ".case-summary": "从民宿与酒店一线服务问题出发，构建集意图识别、知识检索、订单核验、对话上下文与工单协同于一体的 AI 服务工作流原型。"
    },
    experience: {
      ".case-summary": "围绕真实业务场景参与 AI 服务运营、样本分析、Prompt 与规则迭代、人工协作流程及风险问题闭环。"
    },
    scrm: {
      ".case-hero h1": "AI 医患服务<br><em>自动化</em>",
      ".case-summary": "医疗服务里的难点，不是让 AI 生成一句话，而是判断何时能自动回复、怎样控制回答质量，以及何时必须交给人工。"
    },
    coffee: {
      ".case-hero h1": "Coffee Growth<br><em>Engine</em>",
      ".case-summary": "把消费者研究转成可以执行、可以测试的会员营销决策。规则负责商业约束，大模型负责适合生成式 AI 的语言任务——先让系统可控，再逐步扩展。"
    },
    research: {
      ".case-hero h1": "行业研究<br><em>与机会识别</em>",
      ".case-summary": "从人的需求出发，研究行业如何组织供给、分配资源与创造价值，并把结构性洞察转化为产品问题和商业机会假设。"
    }
  };
  const page = document.body.dataset.page;
  const apply = (entries) => Object.entries(entries || {}).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node && typeof value === "string") node.innerHTML = value;
  });
  apply(SITE_CONTENT.shared);
  apply(SITE_CONTENT[page]);
})();
