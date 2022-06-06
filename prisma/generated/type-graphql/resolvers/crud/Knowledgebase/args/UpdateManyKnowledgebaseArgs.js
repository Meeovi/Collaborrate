"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseUpdateManyMutationInput_1 = require("../../../inputs/KnowledgebaseUpdateManyMutationInput");
const KnowledgebaseWhereInput_1 = require("../../../inputs/KnowledgebaseWhereInput");
let UpdateManyKnowledgebaseArgs = class UpdateManyKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseUpdateManyMutationInput_1.KnowledgebaseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseUpdateManyMutationInput_1.KnowledgebaseUpdateManyMutationInput)
], UpdateManyKnowledgebaseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereInput_1.KnowledgebaseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereInput_1.KnowledgebaseWhereInput)
], UpdateManyKnowledgebaseArgs.prototype, "where", void 0);
UpdateManyKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyKnowledgebaseArgs);
exports.UpdateManyKnowledgebaseArgs = UpdateManyKnowledgebaseArgs;
