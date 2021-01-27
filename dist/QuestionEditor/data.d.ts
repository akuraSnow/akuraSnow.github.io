export declare const data: ({
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        subjectName: string;
        studyPeriod: string;
        studyPeriodName: string;
        grade: string;
        gradeName: string;
        difficultDegree: null;
        difficultDegreeName: null;
        owner: null;
        ownerName: null;
        organization: null;
        organizationName: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        questionTypeName: string;
        genre: string;
        genreName: string;
        subjectType: null;
        subjectTypeName: null;
        scene: null;
        sceneName: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: string;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        relation: null;
        transferState: null;
    };
    question: {
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        option: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        id: string;
        objectiveAnswer: number;
        objectiveOption: string;
        objectiveOptionCount: number;
        questions: never[];
        contentImages?: undefined;
        answerImages?: undefined;
        explanationImages?: undefined;
        answerImagePath?: undefined;
        explanationImagePath?: undefined;
        optionImagePath?: undefined;
        stemImagePath?: undefined;
        objectiveAnswerNum?: undefined;
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: number;
        providerName: string;
        schoolYear: string;
        grade: string;
        gradeName: string;
        questionId: number;
    };
    book: {
        ebookId: string;
        ebookName: string;
        catalogueId: string;
        catalogueName: string;
        questionId: string;
        pageNumber: number;
        sort: number;
    }[];
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: null;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: never[];
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: null;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: null;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: string[];
        }[];
        explanation: never[];
        answer: never[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: null;
        explanationImages: null;
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: {
            id: string;
            order: number;
            questionType: string;
            stem: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: string[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            explanation: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            answer: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            contentImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            explanationImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImagePath: null;
            explanationImagePath: null;
            optionImagePath: null;
            stemImagePath: null;
            option: never[];
            objectiveAnswer: number;
            objectiveOption: string;
            objectiveOptionCount: number;
            objectiveAnswerNum: number;
            questions: never[];
        }[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: number;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: {
        rootId: string;
        rootName: string;
        nodeId: string;
        nodeName: string;
    }[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: null;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: string[];
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: never[];
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: never[];
        }[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        explanationImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: never[];
        }[];
        objectiveAnswer: number;
        objectiveOption: string;
        objectiveOptionCount: number;
        objectiveAnswerNum: number;
        questions: never[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: number;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: never[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: null;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: null;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: never[];
        }[];
        explanation: never[];
        answer: never[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: null;
        explanationImages: null;
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: {
            id: string;
            order: number;
            questionType: string;
            stem: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: string[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            explanation: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            answer: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            contentImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            explanationImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImagePath: null;
            explanationImagePath: null;
            optionImagePath: null;
            stemImagePath: null;
            option: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: string[];
                }[];
                indentation: number;
                alignment: string;
                styles: never[];
            }[];
            objectiveAnswer: number;
            objectiveOption: string;
            objectiveOptionCount: number;
            objectiveAnswerNum: number;
            questions: never[];
        }[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: null;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: never[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: null;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: string[];
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: never[];
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: string[];
        }[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        explanationImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: never[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: number;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: never[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: null;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        explanationImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: never[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: number;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: never[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: string;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: string;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: string;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        explanationImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: never[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: null;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: {
        rootId: string;
        rootName: string;
        nodeId: string;
        nodeName: string;
    }[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: string;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        explanation: never[];
        answer: never[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: null;
        explanationImages: null;
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: {
            id: string;
            order: number;
            questionType: string;
            stem: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: string[];
                }[];
                indentation: number;
                alignment: string;
                styles: null;
            }[];
            explanation: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: null;
            }[];
            answer: {
                fragments: {
                    content: string;
                    mediaType: string;
                    styles: never[];
                }[];
                indentation: number;
                alignment: string;
                styles: null;
            }[];
            contentImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            explanationImages: {
                png: {
                    url: string;
                    width: number;
                    height: number;
                    sort: number;
                }[];
            };
            answerImagePath: null;
            explanationImagePath: null;
            optionImagePath: null;
            stemImagePath: null;
            option: never[];
            objectiveAnswer: null;
            objectiveOption: null;
            objectiveOptionCount: number;
            objectiveAnswerNum: null;
            questions: never[];
        }[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: null;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: {
        rootId: string;
        rootName: string;
        nodeId: string;
        nodeName: string;
    }[];
    book?: undefined;
} | {
    baseInfo: {
        id: string;
        name: string;
        mediaType: null;
        year: number;
        subject: string;
        studyPeriod: string;
        grade: string;
        difficultDegree: string;
        owner: null;
        ownerName: null;
        organization: null;
        state: number;
        origin: string;
        qualityLevels: number;
        questionType: string;
        genre: string;
        subjectType: string;
        scene: null;
        schoolId: null;
        schoolName: null;
        operator: number;
        operatorName: null;
        description: null;
        createTime: number;
        updateTime: number;
        districtName: null;
        district: null;
        auditorId: number;
        auditorName: string;
        auditTime: number;
        auditState: string;
        distribute: boolean;
        transferState: string;
        subjectName?: undefined;
        studyPeriodName?: undefined;
        gradeName?: undefined;
        difficultDegreeName?: undefined;
        organizationName?: undefined;
        questionTypeName?: undefined;
        genreName?: undefined;
        subjectTypeName?: undefined;
        sceneName?: undefined;
        relation?: undefined;
    };
    question: {
        id: string;
        order: number;
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: never[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: never[];
            }[];
            indentation: number;
            alignment: string;
            styles: null;
        }[];
        contentImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        explanationImages: {
            png: {
                url: string;
                width: number;
                height: number;
                sort: number;
            }[];
        };
        answerImagePath: null;
        explanationImagePath: null;
        optionImagePath: null;
        stemImagePath: null;
        option: never[];
        objectiveAnswer: null;
        objectiveOption: null;
        objectiveOptionCount: number;
        objectiveAnswerNum: null;
        questions: never[];
    };
    questionSourceDTO: {
        areaCode: string;
        areaName: string;
        organization: string;
        organizationName: string;
        provider: null;
        providerName: null;
        schoolYear: string;
        grade: string;
        questionId: string;
        gradeName?: undefined;
    };
    chapters: {
        item: {
            item: null;
            Id: string;
            ParentId: string;
            Guid: string;
            Name: string;
            Index: string;
        }[];
        Id: null;
        ParentId: null;
        Guid: string;
        Name: string;
        Index: null;
    }[];
    knowledge: {
        rootId: string;
        rootName: string;
        nodeId: string;
        nodeName: string;
    }[];
    book?: undefined;
})[];
