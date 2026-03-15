// --- 数据配置 ---

const TAG_SYSTEM = {
    "painting": {
        label: "绘画",
        categories: {
            "style": { label: "风格", tags: ["平涂", "伪厚涂", "厚涂", "线稿", "草稿", "纸绘", "美漫风"] },
            "type": { label: "类型", tags: ["正比", "Q版", "兽设", "双人", "多人", "黑白", "对称", "模板"] },
            "business": { label: "业务", tags: ["头像", "胸像", "半身", "立绘", "横插", "竖插", "组合页", "服设", "印象物", "表情包", "盲盒", "包本", "任选"] }
        }
    },
    "writing": {
        label: "写文",
        categories: {
            "type": { label: "类型", tags: ["OC文", "世界观", "印象鉴", "短句"] }
        }
    },
    "divination": {
        label: "占卜",
        categories: {
            "type": { label: "类型", tags: ["塔罗", "灵摆", "星盘"] }
        }
    },
    "handmade": {
        label: "手作",
        categories: {
            "type": { label: "类型", tags: ["黏土", "纸雕", "羊毛毡"] }
        }
    }
};

/**
 * 社员数据列表
 * 每个 example 对象可以包含 `previewX` 属性（如 "30%" 或 "left"），
 * 用于控制缩略图中显示的图片水平区域，对应 CSS 的 `object-position` 属性。
 * 如果不设置，默认图片居中显示。
 */
const MEMBERS_DATA = [
    {
        id: 19,
        name: "佚名",
        profession: "画师",
        avatar: "assets/images/avatar/19.webp", // 为空则使用默认占位图
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "Q版立绘",
                price: "¥5r",
                note: "·只接少女,不接动物特征/复杂设/无刘海 /文字设/同人\n·流程为线稿—底色—成图。\n·会先告知工期。",
                tags: ["平涂", "Q版", "立绘"],
                examples: [
                    { type: "image", url: "assets/images/gallery/19_work1_1.webp", previewX: "20%" },
                    { type: "image", url: "assets/images/gallery/19_work1_2.webp", previewX: "80%" },
                    { type: "image", url: "assets/images/gallery/19_work1_3.webp" }
                ]
            }
        ]
    },
    {
        id: 42,
        name: "裕",
        profession: "画师",
        avatar: "assets/images/avatar/42.webp",
        intro: "喜好：14-30岁男性、餐券、暗黑、部分人外特征、疤痕\n苦手：女宝、背头、一次cp\n有线头，完美主义不要虐恋，默认一键出图\n节点要求：草稿→成图",
        main: "painting",
        businesses: [
            {
                name: "黑白精草胸像",
                price: "¥45 - 55r",
                note: "·根据复杂程度浮动\n·加手+5r",
                tags: ["伪厚涂", "草稿", "正比", "黑白", "胸像"],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work1_1.webp" },
                    { type: "image", url: "assets/images/gallery/42_work1_2.webp" },
                    { type: "image", url: "assets/images/gallery/42_work1_3.webp" }
                ]
            },
            {
                name: "色草",
                price: "¥55 - 65r",
                note: "·根据复杂程度浮动\n·加手+5r",
                tags: ["伪厚涂", "草稿", "正比", "胸像"],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work2_1.webp" }
                ]
            },
            {
                name: "半身练习",
                price: "¥15r 浮动",
                note: "·只是练习摸鱼不要有太大期待",
                tags: ["伪厚涂", "草稿", "正比", "半身"],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work3_1.webp" },
                    { type: "image", url: "assets/images/gallery/42_work3_2.webp" },
                    { type: "image", url: "assets/images/gallery/42_work3_3.webp" },
                    { type: "image", url: "assets/images/gallery/42_work3_4.webp" },
                    { type: "image", url: "assets/images/gallery/42_work3_5.webp" }
                ]
            },
            {
                name: "摸鱼页",
                price: "¥65 - 80r 浮动",
                note: "",
                tags: ["伪厚涂", "正比", "摸鱼页"],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work4_1.webp" },
                ]
            },
            {
                name: "证件照",
                price: "¥60 - 65r",
                note: "",
                tags: ["伪厚涂", "正比", "头像"],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work5_1.webp" },
                    { type: "image", url: "assets/images/gallery/42_work5_2.webp" },
                ]
            },
            {
                name: "双人插",
                price: "¥120+",
                note: "·随背景等复杂程度浮动",
                tags: ["伪厚涂", "正比", "双人",],
                examples: [
                    { type: "image", url: "assets/images/gallery/42_work6_1.webp" },
                ]
            }
        ]
    },
    {
        id: 28,
        name: "楠涧银泱",
        profession: "画师",
        avatar: "assets/images/avatar/28.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "胸像",
                price: "¥15r",
                note: "·工期：2 - 7天",
                tags: ["平涂", "正比", "胸像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/28_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/28_work1_2.webp"
                    }
                ]
            },
            {
                name: "小零食",
                price: "¥5r",
                note: "·工期：24h",
                tags: ["平涂", "Q版", "头像"],
                examples: [
                    { type: "image", url: "assets/images/gallery/28_work2_1.webp" }
                ]
            },
            {
                name: "服设",
                price: "¥5r",
                note: "·工期：无排单24h，有排单不定\n·以下部分例图非成图展示",
                tags: ["平涂", "正比", "横插"],
                examples: [
                    { type: "image", url: "assets/images/gallery/28_work3_1.webp" },
                    { type: "image", url: "assets/images/gallery/28_work3_2.webp" },
                    { type: "image", url: "assets/images/gallery/28_work3_3.webp" }
                ]
            }
        ]
    },
    {
        id: 103,
        name: "酵母",
        profession: "画师",
        avatar: "assets/images/avatar/103.webp",
        intro: "苦手：成男\n可接OC、同人、自设、文字设\n工作日和上学排单时间早，可监工\n绘画期间不满意随时修改，无论到哪一步骤直到满意",
        main: "painting",
        businesses: [
            {
                name: "半身语音框",
                price: "¥20r",
                note: "·工期：根据排单而定",
                tags: ["平涂", "正比", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/103_work1_1.webp",
                        previewX: "20%"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/103_work1_2.webp",
                        previewX: "20%"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/103_work1_3.webp",
                        previewX: "80%"
                    }
                ]
            },
            {
                name: "任选纸绘业务",
                price: "¥自带价",
                note: "·接包本",
                tags: ["纸绘", "任选"],
                examples: [
                    { type: "image", url: "assets/images/gallery/103_work2_1.webp" }
                ]
            }
        ]
    },
    {
        id: 83,
        name: "怡然似梦",
        profession: "画师",
        avatar: "assets/images/avatar/83.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "QQ人",
                price: "¥30 - 55r",
                note: "·单人：30\u3000抱娃：35\u3000双人：55",
                tags: ["平涂", "Q版", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work1_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work1_3.webp"
                    }
                ]
            },
            {
                name: "正比立绘",
                price: "¥55 - 70r",
                note: "·男：70r\u3000女：55r\n·文字设：+10r",
                tags: ["平涂", "正比", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work2_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/83_work2_3.webp"
                    }
                ]
            }
        ]
    },
    {
        id: "吉祥物",
        name: "雁残",
        profession: "画师",
        avatar: "assets/images/avatar/mascot.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "QQ人大头",
                price: "¥10r",
                note: "·工期：2 - 5天",
                tags: ["平涂", "Q版", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/mascot_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/mascot_work1_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/mascot_work1_3.webp"
                    }
                ]
            },
            {
                name: "QQ人全身",
                price: "¥13r",
                note: "·工期：2 - 5天",
                tags: ["平涂", "Q版", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/mascot_work2_1.webp"
                    }
                ]
            },
            {
                name: "表情包贴纸",
                price: "¥3 - 5r",
                note: "·3r/1个，5r/2个\n·工期：2 - 3天",
                tags: ["平涂", "Q版", "表情包"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/mascot_work3_1.webp"
                    }
                ]
            }
        ]
    },
    {
        id: 76,
        name: "郁喜",
        profession: "画师",
        avatar: "assets/images/avatar/76.webp",
        main: "painting",
        businesses: [
            {
                name: "上色业务",
                price: "¥15 - 26r+",
                note: "·大头8+ 胸像12+ 半身16+ 全身20+",
                tags: ["平涂", "任选"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work1_2.webp"
                    }
                ]
            },
            {
                name: "自带模板",
                price: "¥10 - 18r+",
                note: "·大头5+ 胸像8+ 半身12+ 全身15+",
                tags: ["线稿", "任选"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work2_2.webp"
                    }
                ]
            },
            {
                name: "Q头",
                price: "¥1.5r",
                note: "·只画到身体一半\n·复杂设定画不了会简化\n·工期：排到后1天内",
                tags: ["平涂", "Q版", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/76_work3_2.webp"
                    }
                ]

            }
        ]
    },
    {
        id: 27,
        name: "温旭",
        profession: "画师",
        avatar: "assets/images/avatar/27.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "大头",
                price: "¥25r",
                note: "",
                tags: ["平涂", "正比", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work1_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work1_3.webp"
                    }
                ]
            },
            {
                name: "双人半身",
                price: "¥40 - 50r",
                note: "",
                tags: ["平涂", "正比", "双人", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_4.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_5.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_6.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_7.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work2_8.webp"
                    }
                ]
            },
            {
                name: "单人半身/全身",
                price: "¥35r+",
                note: "",
                tags: ["平涂", "正比", "半身", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work3_2.webp"
                    }
                ]
            },
            {
                name: "立绘",
                price: "¥50r+",
                note: "",
                tags: ["平涂", "正比", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work4_1.webp"
                    }
                ]
            },
            {
                name: "QQ人",
                price: "¥15r+",
                note: "",
                tags: ["平涂", "Q版", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work5_1.webp"
                    }
                ]
            },
            {
                name: "组合页",
                price: "¥25r+",
                note: "",
                tags: ["平涂", "正比", "组合页"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/27_work6_1.webp"
                    }
                ]
            }
        ]
    },
    {
        id: 124,
        name: "倦鸟归",
        profession: "画师",
        avatar: "assets/images/avatar/124.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "QQ人表情包",
                price: "¥4r",
                note: "",
                tags: ["草稿", "Q版", "表情包"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work1_2.webp"
                    }
                ]
            },
            {
                name: "黑白半身",
                price: "¥5r",
                note: "·工期：24-36h",
                tags: ["草稿", "正比", "黑白", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work2_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work2_3.webp"
                    }
                ]
            },
            {
                name: "QQ人大头",
                price: "¥15r",
                note: "·工期：1-2天",
                tags: ["伪厚涂", "Q版", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work3_2.webp"
                    }
                ]
            },
            {
                name: "Q插",
                price: "¥20r",
                note: "·工期：2-4天",
                tags: ["伪厚涂", "Q版", "竖插", "横插"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work4_1.webp"
                    }
                ]
            },
            {
                name: "QQ人小蛋糕",
                price: "¥25r",
                note: "·工期：2-4天\n·小蛋糕可定制",
                tags: ["伪厚涂", "Q版", "印象物"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work5_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work5_2.webp"
                    }
                ]
            },
            {
                name: "Q全",
                price: "¥30r",
                note: "·工期：3-5天",
                tags: ["伪厚涂", "Q版", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work6_1.webp"
                    }
                ]
            },
            {
                name: "黑白吧唧",
                price: "¥20r",
                note: "·工期：2-4天\n·上色+15r",
                tags: ["线稿", "正比", "黑白", "印象物"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work7_1.webp"
                    }
                ]
            },
            {
                name: "光影氛围插图",
                price: "¥30r",
                note: "·工期：3-5天\n·光影氛围插画只有五彩斑斓的光影，底色为白色",
                tags: ["伪厚涂", "正比", "横插", "竖插"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work8_1.webp"
                    }
                ]
            },
            {
                name: "全身/半身插画",
                price: "¥35 - 45r",
                note: "·工期：3-5天\n·默认价为42r，根据完成度多补少退",
                tags: ["伪厚涂", "正比", "横插", "竖插"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work9_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work9_2.webp"
                    }
                ]
            },
            {
                name: "塔罗牌",
                price: "¥45r",
                note: "·工期：3-5天",
                tags: ["伪厚涂", "正比", "印象物"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/124_work10_1.webp"
                    }
                ]
            },
        ]
    },
    {
        id: 14,
        name: "颜测",
        profession: "画师",
        avatar: "assets/images/avatar/14.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "上色大头",
                price: "¥10r",
                note: "",
                tags: ["伪厚涂", "正比", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work1_1.webp"
                    },
                ]
            },
            {
                name: "上色半身",
                price: "¥25r",
                note: "",
                tags: ["伪厚涂", "正比", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work2_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work2_3.webp"
                    },
                ]
            },
            {
                name: "无色半身",
                price: "¥15r",
                note: "",
                tags: ["平涂", "正比", "黑白", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work3_2.webp"
                    },
                ]
            },
            {
                name: "意识流",
                price: "¥9r",
                note: "",
                tags: ["草稿", "正比", "任选"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work4_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work4_2.webp"
                    },
                ]
            },
            {
                name: "纸绘半身/全身",
                price: "¥10 - 29r",
                note: "·半身10r，有色+2r\n·全身15r，有色+4r\n·转电子稿+10r",
                tags: ["纸绘", "草稿", "正比", "任选"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work5_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work5_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work5_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work5_4.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work5_5.webp"
                    }
                ]
            },
            {
                name: "包本",
                price: "¥5r+",
                note: "·5r/页\u3000\u3000·150r/50页",
                tags: ["纸绘", "草稿", "正比", "包本"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_4.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_5.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_6.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_7.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/14_work6_8.webp"
                    },
                ]
            }
        ]
    },
    {
        id: 50,
        name: "雾眠",
        profession: "画师",
        avatar: "assets/images/avatar/50.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "胸像瞳孔色",
                price: "¥15r",
                note: "·工期：1-3天",
                tags: ["线稿", "正比", "胸像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work1_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work1_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work1_4.webp"
                    },
                ]
            },
            {
                name: "精草胸像",
                price: "¥15r",
                note: "·工期：1-3天",
                tags: ["草稿", "正比", "胸像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work2_1.webp"
                    },
                ]
            },
            {
                name: "半身精草",
                price: "¥15 - 25r",
                note: "",
                tags: ["草稿", "正比", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work3_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work3_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work3_4.webp"
                    },
                ]
            },
            {
                name: "随机盲盒",
                price: "¥5.2r",
                note: "",
                tags: ["盲盒"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work4_1.webp"
                    }
                ]
            },
            {
                name: "色草胸像",
                price: "¥18 -25r",
                note: "",
                tags: ["草稿", "正比", "胸像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/50_work5_1.webp"
                    }
                ]
            }
        ]
    },
    {
        id: 58,
        name: "Sualin",
        profession: "画师",
        avatar: "assets/images/avatar/58.webp",
        intro: "",
        main: "painting",
        businesses: [
            {
                name: "微Q大头",
                price: "¥13r",
                note: "",
                tags: ["平涂", "Q版", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work1_1.webp"
                    },
                ]
            },
            {
                name: "双人半身",
                price: "¥50r",
                note: "",
                tags: ["平涂", "正比", "双人", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work2_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work2_3.webp"
                    }
                ]
            },
            {
                name: "单人半身",
                price: "¥35r",
                note: "",
                tags: ["平涂", "正比", "半身"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work3_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work3_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work3_3.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work3_4.webp"
                    }
                ]
            },
            {
                name: "单人对称证件照",
                price: "¥28r",
                note: "",
                tags: ["平涂", "对称", "胸像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work4_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work4_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work4_3.webp"
                    }
                ]
            },
            {
                name: "QQ全身",
                price: "¥8.5r",
                note: "",
                tags: ["平涂", "Q版", "例图"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work5_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work5_2.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/58_work5_3.webp"
                    }
                ]
            }
        ]
    },
    {
        id: 68,
        name: "木目",
        profession: "画师",
        avatar: "assets/images/avatar/68.webp",
        intro: "·加急x2，买断x3\n·不接：复杂设、成男",
        main: "painting",
        businesses: [
            {
                name: "大头",
                price: "¥25 - 30r",
                note: "·工期：3-5天",
                tags: ["平涂", "正比", "头像"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/68_work1_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/68_work1_2.webp"
                    }
                ]
            },
            {
                name: "抽象小人",
                price: "¥5r",
                note: "工期：1-2天\n·手持物+0.5r/人",
                tags: ["平涂", "Q版", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/68_work2_1.webp"
                    },
                    {
                        type: "image",
                        url: "assets/images/gallery/68_work2_2.webp"
                    },
                ]
            },
            {
                name: "正比头火柴人",
                price: "¥2r",
                note: "工期：1-2天",
                tags: ["平涂", "Q版", "立绘"],
                examples: [
                    {
                        type: "image",
                        url: "assets/images/gallery/68_work3_1.webp"
                    }
                ]
            }
        ]
    },
    // {
    //     id: 0,
    //     name: "",
    //     profession: "画师",
    //     avatar: "",
    //     intro: "",
    //     main: "painting",
    //     businesses: [
    //         {
    //             name: "",
    //             price: "¥r+",
    //             note: "·",
    //             tags: [""],
    //             examples: [
    //                 {
    //                     type: "image",
    //                     url: "assets/images/gallery/_work1_1.webp"
    //                 },
    //                 {
    //                     type: "image",
    //                     url: "assets/images/gallery/_work1_2.webp"
    //                 }
    //             ]
    //         },
    //     ]
    // },
];

// --- 状态管理 ---

const state = {
    members: [], // 初始完整社员列表
    filteredMembers: [], // 过滤后的社员列表
    currentPage: 1,
    itemsPerPage: 4, // 每页显示的社员数
    filters: {
        search: "",
        mainTag: null,
        subTags: [] // 已选二级标签集合
    }
};

/**
 * 社员排序逻辑
 * 优先级：数字编号 > 英文名 > 中文名
 */
function compareMembers(a, b) {
    const ga = Number.isFinite(a.id) ? 0 : (/^[A-Za-z]/.test(a.name.trim()) ? 1 : 2);
    const gb = Number.isFinite(b.id) ? 0 : (/^[A-Za-z]/.test(b.name.trim()) ? 1 : 2);
    if (ga !== gb) return ga - gb;
    if (ga === 0) return (a.id || 0) - (b.id || 0);
    if (ga === 1) return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    return a.name.localeCompare(b.name, 'zh-CN');
}

// --- 初始化入口 ---

document.addEventListener("DOMContentLoaded", () => {
    // 对原始数据进行预排序
    state.members = [...MEMBERS_DATA].sort(compareMembers);
    state.filteredMembers = [...state.members];

    initFilterUI();
    initEventListeners();
    renderMembers();
    renderPagination();
});

// --- UI 初始化相关 ---

/**
 * 渲染一级筛选标签（主要业务）
 */
function initFilterUI() {
    const mainContainer = document.getElementById("mainTagsContainer");

    for (const [key, data] of Object.entries(TAG_SYSTEM)) {
        const btn = document.createElement("button");
        btn.className = "tag-btn";
        btn.textContent = data.label;
        btn.dataset.key = key;
        btn.onclick = () => selectMainTag(key);
        mainContainer.appendChild(btn);
    }
}

/**
 * 绑定各种页面交互事件
 */
function initEventListeners() {
    // 搜索框输入监听
    document.getElementById("searchInput").addEventListener("input", (e) => {
        state.filters.search = e.target.value.trim().toLowerCase();
        state.currentPage = 1; // 重置到第一页
        applyFilters();
    });

    // 展开/收起筛选面板
    document.getElementById("toggleFilterBtn").addEventListener("click", () => {
        const panel = document.getElementById("filterPanel");
        panel.classList.toggle("active");
        const btn = document.getElementById("toggleFilterBtn");
        btn.textContent = panel.classList.contains("active") ? "收起筛选 △" : "展开筛选 ▽";
    });

    // 分页点击事件
    document.getElementById("prevPage").addEventListener("click", () => changePage(state.currentPage - 1));
    document.getElementById("nextPage").addEventListener("click", () => changePage(state.currentPage + 1));
    document.getElementById("pageSelect").addEventListener("change", (e) => changePage(parseInt(e.target.value)));

    // 弹窗关闭事件
    document.getElementById("closeModal").addEventListener("click", closeModal);
    document.getElementById("memberModal").addEventListener("click", (e) => {
        // 点击弹窗背景（遮罩层）时关闭
        if (e.target === document.getElementById("memberModal")) closeModal();
    });
}

// --- 过滤逻辑 ---

/**
 * 选择一级标签
 */
function selectMainTag(key) {
    // 如果点击已选中的标签，则取消选中
    if (state.filters.mainTag === key) {
        state.filters.mainTag = null;
        state.filters.subTags = [];
    } else {
        state.filters.mainTag = key;
        state.filters.subTags = []; // 切换主分类时清空子分类
    }

    updateMainTagUI();
    renderSubTags();
    state.currentPage = 1;
    applyFilters();
}

/**
 * 选择二级标签
 */
function selectSubTag(tag) {
    const index = state.filters.subTags.indexOf(tag);
    if (index > -1) {
        state.filters.subTags.splice(index, 1); // 已存在则移除
    } else {
        state.filters.subTags.push(tag); // 不存在则添加
    }

    updateSubTagUI();
    state.currentPage = 1;
    applyFilters();
}

/**
 * 从已选标签栏移除特定标签
 */
function removeTag(type, value) {
    if (type === 'main') {
        state.filters.mainTag = null;
        state.filters.subTags = []; 
        updateMainTagUI();
        renderSubTags(); // 隐藏二级分类区域
    } else if (type === 'sub') {
        const index = state.filters.subTags.indexOf(value);
        if (index > -1) {
            state.filters.subTags.splice(index, 1);
        }
        updateSubTagUI();
    }
    state.currentPage = 1;
    applyFilters();
}

/**
 * 更新一级标签的激活状态 UI
 */
function updateMainTagUI() {
    const btns = document.querySelectorAll("#mainTagsContainer .tag-btn");
    btns.forEach(btn => {
        if (btn.dataset.key === state.filters.mainTag) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    updateSelectedTagsBar();
}

/**
 * 根据一级分类渲染二级标签区域
 */
function renderSubTags() {
    const wrapper = document.getElementById("subTagsWrapper");
    wrapper.innerHTML = "";

    if (!state.filters.mainTag) {
        wrapper.classList.remove("active");
        return;
    }

    wrapper.classList.add("active");
    const categories = TAG_SYSTEM[state.filters.mainTag].categories;

    for (const [catKey, catData] of Object.entries(categories)) {
        const group = document.createElement("div");
        group.className = "sub-tag-group";

        const label = document.createElement("span");
        label.className = "sub-group-label";
        label.textContent = catData.label;
        group.appendChild(label);

        const tagsDiv = document.createElement("div");
        tagsDiv.className = "tag-container";

        catData.tags.forEach(tag => {
            const btn = document.createElement("button");
            btn.className = "tag-btn";
            btn.textContent = tag;
            btn.dataset.tag = tag;
            if (state.filters.subTags.includes(tag)) {
                btn.classList.add("active");
            }
            btn.onclick = () => selectSubTag(tag);
            tagsDiv.appendChild(btn);
        });

        group.appendChild(tagsDiv);
        wrapper.appendChild(group);
    }
}

/**
 * 更新二级标签的激活状态 UI
 */
function updateSubTagUI() {
    const btns = document.querySelectorAll("#subTagsWrapper .tag-btn");
    btns.forEach(btn => {
        if (state.filters.subTags.includes(btn.dataset.tag)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    updateSelectedTagsBar();
}

/**
 * 更新显示当前所有已选标签的横条
 */
function updateSelectedTagsBar() {
    const bar = document.getElementById("selectedTagsBar");
    bar.innerHTML = "";

    // 渲染一级标签
    if (state.filters.mainTag) {
        const chip = document.createElement("div");
        chip.className = "selected-tag";
        chip.innerHTML = `
            ${TAG_SYSTEM[state.filters.mainTag].label}
            <span class="remove-tag" onclick="removeTag('main')">×</span>
        `;
        bar.appendChild(chip);
    }

    // 渲染二级标签
    state.filters.subTags.forEach(tag => {
        const chip = document.createElement("div");
        chip.className = "selected-tag";
        chip.innerHTML = `
            ${tag}
            <span class="remove-tag" onclick="removeTag('sub', '${tag}')">×</span>
        `;
        bar.appendChild(chip);
    });
}

/**
 * 核心过滤方法，应用搜索和标签筛选
 */
function applyFilters() {
    state.filteredMembers = state.members.filter(member => {
        // 1. 搜索匹配（名称、职业、编号、业务名称）
        const searchMatch = !state.filters.search ||
            member.name.toLowerCase().includes(state.filters.search) ||
            member.profession.toLowerCase().includes(state.filters.search) ||
            member.id.toString().includes(state.filters.search) ||
            member.businesses.some(biz => biz.name.toLowerCase().includes(state.filters.search));

        if (!searchMatch) return false;

        // 2. 一级分类匹配
        if (state.filters.mainTag) {
            if (member.main !== state.filters.mainTag) return false;
        }

        // 3. 二级标签匹配 (采用并集逻辑：社员业务标签需包含所有已选二级标签)
        if (state.filters.subTags.length > 0) {
            const memberHasSubs = state.filters.subTags.every(tag =>
                member.businesses.some(biz => biz.tags && biz.tags.includes(tag))
            );
            if (!memberHasSubs) return false;
        }

        return true;
    });

    renderMembers();
    renderPagination();
}

/**
 * 安全转义 HTML，防止 XSS
 */
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --- 页面渲染 ---

/**
 * 渲染社员列表网格
 */
function renderMembers() {
    const grid = document.getElementById("membersGrid");
    const noResults = document.getElementById("noResults");
    grid.innerHTML = "";

    if (state.filteredMembers.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    // 再次排序以防过滤后顺序混乱
    state.filteredMembers.sort(compareMembers);

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, state.filteredMembers.length);
    const pageMembers = state.filteredMembers.slice(startIndex, endIndex);

    pageMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";

        // 如果没有头像则生成占位图
        const avatarUrl = member.avatar || generateAvatar(member.name);

        card.innerHTML = `
            <div class="member-id">编号：${escapeHtml(member.id.toString())}</div>
            <img src="${avatarUrl}" class="member-avatar" alt="${escapeHtml(member.name)}">
            <div class="member-name">${escapeHtml(member.name)}</div>
            <div class="member-profession">${escapeHtml(member.profession)}</div>
        `;

        card.onclick = () => openModal(member);
        grid.appendChild(card);
    });
}

/**
 * 生成带文字的背景色占位头像
 */
function generateAvatar(name) {
    const char = name.charAt(0);
    const colors = ["#7A9987", "#C35F50", "#DDB480", "#637E6F"];
    const color = colors[name.length % colors.length];
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="${color}"/><text x="50" y="50" font-family="sans-serif" font-size="40" fill="white" text-anchor="middle" dy=".3em">${char}</text></svg>`)}`;
}

/**
 * 渲染分页 UI
 */
function renderPagination() {
    const totalPages = Math.ceil(state.filteredMembers.length / state.itemsPerPage);
    const container = document.getElementById("pagination");
    const select = document.getElementById("pageSelect");
    const prev = document.getElementById("prevPage");
    const next = document.getElementById("nextPage");
    const info = document.getElementById("pageInfo");

    if (totalPages <= 1) {
        container.style.display = "none";
        return;
    }
    container.style.display = "flex";

    // 更新下拉选择框
    select.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `第 ${i} 页`;
        if (i === state.currentPage) opt.selected = true;
        select.appendChild(opt);
    }

    // 更新按钮状态
    prev.disabled = state.currentPage === 1;
    next.disabled = state.currentPage === totalPages;
    info.textContent = `${state.currentPage} / ${totalPages}`;
}

/**
 * 翻页方法
 */
function changePage(page) {
    const totalPages = Math.ceil(state.filteredMembers.length / state.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    state.currentPage = page;
    renderMembers();
    renderPagination();
}

// --- 详情弹窗相关 ---

function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

function unlockBodyScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
}

/**
 * 打开社员详情弹窗
 */
function openModal(member) {
    const modal = document.getElementById("memberModal");
    const avatar = document.getElementById("modalAvatar");
    const name = document.getElementById("modalName");
    const prof = document.getElementById("modalProfession");
    const intro = document.getElementById("modalIntro");
    const gallery = document.getElementById("modalBusinesses");

    avatar.src = member.avatar || generateAvatar(member.name);
    name.textContent = escapeHtml(member.name);
    prof.textContent = escapeHtml(member.profession);
    
    const modalId = document.getElementById("modalId");
    if (modalId) modalId.textContent = `编号：${member.id}`;

    if (member.intro) {
        intro.innerHTML = escapeHtml(member.intro).replace(/\n/g, '<br>');
        intro.style.display = "block";
    } else {
        intro.style.display = "none";
    }

    // 渲染各项业务详情
    gallery.innerHTML = "";
    member.businesses.forEach((biz, bizIndex) => {
        const card = document.createElement("div");
        card.className = "business-card";

        // 标签 HTML
        let tagsHtml = "";
        if (biz.tags && biz.tags.length > 0) {
            tagsHtml = `<div class="biz-tags">` +
                biz.tags.map(t => `<span class="biz-tag">${t}</span>`).join("") +
                `</div>`;
        }

        // 例图轮播 HTML
        let examplesHtml = "";
        if (biz.examples && biz.examples.length > 0) {
            examplesHtml = `<div class="example-carousel">
                <div class="carousel-container">
                    <div class="carousel-track">`;

            // 将例图分组（两两一组）
            for (let i = 0; i < biz.examples.length; i += 2) {
                examplesHtml += `<div class="carousel-slide">`;
                const ex1 = biz.examples[i];
                examplesHtml += renderExampleItem(ex1, i, bizIndex);
                if (i + 1 < biz.examples.length) {
                    const ex2 = biz.examples[i + 1];
                    examplesHtml += renderExampleItem(ex2, i + 1, bizIndex);
                }
                examplesHtml += `</div>`;
            }

            examplesHtml += `</div>
                </div>
                <button class="carousel-arrow carousel-prev" onclick="moveCarousel(this, 1)">&lt;</button>
                <button class="carousel-arrow carousel-next" onclick="moveCarousel(this, -1)">&gt;</button>
            </div>`;
        }

        card.innerHTML = `
            <div class="biz-header">
                <span class="biz-name">${biz.name}</span>
                <span class="biz-price">${biz.price}</span>
            </div>
            <div class="biz-note">${biz.note.replace(/\n/g, '<br>')}</div>
            ${examplesHtml}
            ${tagsHtml}
        `;
        gallery.appendChild(card);
    });

    modal.classList.add("active");
    lockBodyScroll();

    // 弹窗打开时重置滚动位置
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
    if (gallery) gallery.scrollTop = 0;

    // 防止背景滚动
    modal.addEventListener('wheel', preventScroll, { passive: false });
    modal.addEventListener('touchmove', preventScroll, { passive: false });

    // 初始化轮播箭头显示逻辑
    requestAnimationFrame(() => {
        initCarousels();
    });
}

/**
 * 渲染单个例图/视频项目
 */
function renderExampleItem(ex, index, bizIndex) {
    const FALLBACK_IMG = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#999">示例缺失</text></svg>');
    if (ex.type === "image") {
        const objectPosX = ex.previewX ? ex.previewX : "50%";
        return `<div class="example-item">
            <img src="${ex.url}" alt="作品示例 ${index + 1}" loading="lazy" onclick="openMediaModal(${bizIndex}, ${index})" ondragstart="return false;" style="object-position: ${objectPosX} 50%;" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>`;
    } else if (ex.type === "video") {
        const posterAttr = ex.poster ? `poster="${ex.poster}"` : "";
        return `<div class="example-item">
            <div class="video-thumb" onclick="openMediaModal(${bizIndex}, ${index})">
                <video src="${ex.url}" ${posterAttr} muted playsinline preload="metadata" onerror="this.outerHTML='<div style=&quot;color:#fff;background:#000;display:flex;align-items:center;justify-content:center;height:100%;&quot;>视频无法加载</div>'"></video>
                <span class="play-icon">▶</span>
            </div>
        </div>`;
    }
    return "";
}

function closeModal() {
    const modal = document.getElementById("memberModal");
    modal.classList.remove("active");
    unlockBodyScroll();

    modal.removeEventListener('wheel', preventScroll);
    modal.removeEventListener('touchmove', preventScroll);
}

/**
 * 阻止默认滚动行为
 */
function preventScroll(e) {
    // 允许在内容区内部滚动
    if (e.target.closest('.modal-content') || e.target.closest('.image-modal-content')) {
        return;
    }
    e.preventDefault();
}

// --- 轮播图交互逻辑 ---

function moveCarousel(button, direction) {
    const carousel = button.closest('.example-carousel');
    const track = carousel.querySelector('.carousel-track');
    const slides = track.children;
    const totalSlides = slides.length;
    const container = carousel.querySelector('.carousel-container');

    if (totalSlides <= 1) return;

    const currentTransform = track.style.transform || 'translateX(0px)';
    const currentX = parseInt(currentTransform.replace('translateX(', '').replace('px)', '')) || 0;

    const slideWidth = container.clientWidth;
    const maxScroll = -(totalSlides - 1) * slideWidth;

    let newX = currentX + (direction * slideWidth);

    // 边界限制
    if (newX > 0) newX = 0;
    if (newX < maxScroll) newX = maxScroll;

    track.style.transform = `translateX(${newX}px)`;
    updateArrowVisibility(carousel, newX, maxScroll);
}

/**
 * 根据滚动位置更新箭头的可见性
 */
function updateArrowVisibility(carousel, currentX, maxScroll) {
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (prevBtn) {
        prevBtn.style.opacity = currentX >= 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = currentX >= 0 ? 'none' : 'auto';
    }
    if (nextBtn) {
        nextBtn.style.opacity = currentX <= maxScroll ? '0.3' : '1';
        nextBtn.style.pointerEvents = currentX <= maxScroll ? 'none' : 'auto';
    }
}

/**
 * 初始化弹窗内所有轮播图的状态
 */
function initCarousels() {
    const carousels = document.querySelectorAll('.example-carousel');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = track.children;
        const totalSlides = slides.length;
        const container = carousel.querySelector('.carousel-container');

        if (totalSlides <= 1) {
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        } else {
            track.style.transform = 'translateX(0px)';
            const prevBtn = carousel.querySelector('.carousel-prev');
            const nextBtn = carousel.querySelector('.carousel-next');
            const slideWidth = container.clientWidth;
            const maxScroll = -(totalSlides - 1) * slideWidth;

            if (prevBtn) {
                prevBtn.style.display = 'flex';
                prevBtn.style.opacity = '0.3';
                prevBtn.style.pointerEvents = 'none';
            }
            if (nextBtn) {
                nextBtn.style.display = 'flex';
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        }
    });
}

// --- 图片查看器（全屏、缩放、拖拽） ---

let currentMediaIndex = 0;
let currentBizExamples = [];

// 缩放和偏移状态
let mediaZoom = 1;
let mediaX = 0;
let mediaY = 0;
let isMediaDragging = false;
let mediaLastX = 0;
let mediaLastY = 0;
let mediaPinchDist = 0;

/**
 * 打开全屏媒体查看器
 */
function openMediaModal(bizIndex, exampleIndex) {
    const memberName = document.getElementById("modalName").textContent;
    const member = state.filteredMembers.find(m => m.name === memberName);
    if (!member || !member.businesses[bizIndex]) return;

    currentBizExamples = member.businesses[bizIndex].examples;
    currentMediaIndex = exampleIndex;

    let mediaModal = document.getElementById('mediaModal');
    if (!mediaModal) {
        mediaModal = document.createElement('div');
        mediaModal.id = 'mediaModal';
        mediaModal.className = 'image-modal-overlay media-modal';
        mediaModal.innerHTML = `
            <div class="image-modal-content">
                <span class="close-image-modal">&times;</span>
                <div id="mediaContainer" class="media-container"></div>
                <button class="media-arrow media-prev" onclick="changeMedia(-1)">&lt;</button>
                <button class="media-arrow media-next" onclick="changeMedia(1)">&gt;</button>
                <div class="media-counter"><span id="mediaCurrent">1</span> / <span id="mediaTotal">1</span></div>
            </div>
        `;
        document.body.appendChild(mediaModal);

        mediaModal.onclick = (e) => {
            if (isMediaDragged) {
                isMediaDragged = false;
                return;
            }
            if (e.target === mediaModal || e.target.classList.contains('close-image-modal')) {
                closeMediaModal();
            }
        };

        initMediaEvents(mediaModal);
    }

    updateMediaContent();
    mediaModal.classList.add('active');
    lockBodyScroll();

    document.addEventListener('keydown', handleMediaKeydown);
}

let isMediaDragged = false; // 用于区分点击和拖拽，防止拖拽结束时意外触发关闭

/**
 * 绑定缩放和拖拽事件
 */
function initMediaEvents(modal) {
    // 鼠标滚轮缩放
    modal.addEventListener('wheel', (e) => {
        const media = currentBizExamples[currentMediaIndex];
        if (!media || media.type !== 'image') return;

        e.preventDefault();
        const delta = -e.deltaY;
        const zoomFactor = delta > 0 ? 1.1 : 0.9;
        const newZoom = mediaZoom * zoomFactor;

        if (newZoom >= 1 && newZoom <= 5) {
            mediaZoom = newZoom;
            if (mediaZoom === 1) {
                mediaX = 0;
                mediaY = 0;
            }
            updateMediaTransform();
        }
    }, { passive: false });

    // 鼠标点击开始拖拽
    modal.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return; 
        const media = currentBizExamples[currentMediaIndex];
        if (!media || media.type !== 'image' || mediaZoom <= 1) return;

        isMediaDragging = true;
        isMediaDragged = false;
        mediaLastX = e.clientX;
        mediaLastY = e.clientY;
        modal.classList.add('dragging');
    });

    window.addEventListener('mousemove', (e) => {
        if (!isMediaDragging) return;
        const deltaX = e.clientX - mediaLastX;
        const deltaY = e.clientY - mediaLastY;

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
            isMediaDragged = true;
        }

        mediaX += deltaX;
        mediaY += deltaY;
        mediaLastX = e.clientX;
        mediaLastY = e.clientY;
        updateMediaTransform();
    });

    window.addEventListener('mouseup', () => {
        isMediaDragging = false;
        modal.classList.remove('dragging');
    });

    // 移动端触摸事件
    modal.addEventListener('touchstart', (e) => {
        const media = currentBizExamples[currentMediaIndex];
        if (!media || media.type !== 'image') return;

        if (e.touches.length === 1) {
            // 单指拖拽
            if (mediaZoom > 1) {
                isMediaDragging = true;
                isMediaDragged = false;
                mediaLastX = e.touches[0].clientX;
                mediaLastY = e.touches[0].clientY;
            }
        } else if (e.touches.length === 2) {
            // 双指捏合缩放
            isMediaDragging = false;
            mediaPinchDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    });

    modal.addEventListener('touchmove', (e) => {
        const media = currentBizExamples[currentMediaIndex];
        if (!media || media.type !== 'image') return;

        if (mediaZoom > 1 || e.touches.length === 2) {
            e.preventDefault();
        }

        if (e.touches.length === 1 && isMediaDragging) {
            const deltaX = e.touches[0].clientX - mediaLastX;
            const deltaY = e.touches[0].clientY - mediaLastY;

            if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
                isMediaDragged = true;
            }

            mediaX += deltaX;
            mediaY += deltaY;
            mediaLastX = e.touches[0].clientX;
            mediaLastY = e.touches[0].clientY;
            updateMediaTransform();
        } else if (e.touches.length === 2) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const zoomFactor = dist / mediaPinchDist;
            const newZoom = mediaZoom * zoomFactor;

            if (newZoom >= 1 && newZoom <= 5) {
                mediaZoom = newZoom;
                if (mediaZoom === 1) {
                    mediaX = 0;
                    mediaY = 0;
                }
                updateMediaTransform();
            }
            mediaPinchDist = dist;
        }
    }, { passive: false });

    modal.addEventListener('touchend', () => {
        isMediaDragging = false;
    });
}

function updateMediaTransform() {
    const img = document.querySelector('.modal-full-image');
    if (img) {
        img.style.transform = `translate(${mediaX}px, ${mediaY}px) scale(${mediaZoom})`;
    }
}

/**
 * 更新查看器当前显示的内容
 */
function updateMediaContent() {
    const container = document.getElementById('mediaContainer');
    const currentInfo = document.getElementById('mediaCurrent');
    const totalInfo = document.getElementById('mediaTotal');
    const media = currentBizExamples[currentMediaIndex];

    if (!media) return;

    // 切换内容时重置缩放
    mediaZoom = 1;
    mediaX = 0;
    mediaY = 0;

    container.innerHTML = '';
    if (media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.url;
        img.className = 'modal-full-image';
        img.ondragstart = () => false;
        container.appendChild(img);
        updateMediaTransform();
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.url;
        if (media.poster) video.poster = media.poster;
        video.className = 'modal-full-video';
        video.controls = true;
        video.autoplay = true;
        container.appendChild(video);
    }

    currentInfo.textContent = currentMediaIndex + 1;
    totalInfo.textContent = currentBizExamples.length;

    const prevBtn = document.querySelector('.media-prev');
    const nextBtn = document.querySelector('.media-next');
    if (currentBizExamples.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        prevBtn.style.opacity = currentMediaIndex === 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = currentMediaIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentMediaIndex === currentBizExamples.length - 1 ? '0.3' : '1';
        nextBtn.style.pointerEvents = currentMediaIndex === currentBizExamples.length - 1 ? 'none' : 'auto';
    }
}

/**
 * 切换上一个/下一个媒体项目
 */
function changeMedia(direction) {
    const newIndex = currentMediaIndex + direction;
    if (newIndex >= 0 && newIndex < currentBizExamples.length) {
        currentMediaIndex = newIndex;
        updateMediaContent();
    }
}

function handleMediaKeydown(e) {
    if (e.key === 'ArrowLeft') changeMedia(-1);
    if (e.key === 'ArrowRight') changeMedia(1);
    if (e.key === 'Escape') closeMediaModal();
}

function closeMediaModal() {
    const mediaModal = document.getElementById('mediaModal');
    if (mediaModal) {
        const container = document.getElementById('mediaContainer');
        if (container) container.innerHTML = ''; 
        mediaModal.remove(); 
        unlockBodyScroll();
        mediaModal.removeEventListener('wheel', preventScroll);
        mediaModal.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('keydown', handleMediaKeydown);
    }
}
