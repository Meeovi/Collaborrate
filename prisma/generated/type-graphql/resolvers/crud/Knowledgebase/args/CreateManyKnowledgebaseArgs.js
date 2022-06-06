"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseCreateManyInput_1 = require("../../../inputs/KnowledgebaseCreateManyInput");
let CreateManyKnowledgebaseArgs = class CreateManyKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseCreateManyInput_1.KnowledgebaseCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyKnowledgebaseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyKnowledgebaseArgs.prototype, "skipDuplicates", void 0);
CreateManyKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyKnowledgebaseArgs);
exports.CreateManyKnowledgebaseArgs = CreateManyKnowledgebaseArgs;
