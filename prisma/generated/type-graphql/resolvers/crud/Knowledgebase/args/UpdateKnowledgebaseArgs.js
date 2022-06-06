"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseUpdateInput_1 = require("../../../inputs/KnowledgebaseUpdateInput");
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let UpdateKnowledgebaseArgs = class UpdateKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput)
], UpdateKnowledgebaseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], UpdateKnowledgebaseArgs.prototype, "where", void 0);
UpdateKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateKnowledgebaseArgs);
exports.UpdateKnowledgebaseArgs = UpdateKnowledgebaseArgs;
