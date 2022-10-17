"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let DeleteOneCasesArgs = class DeleteOneCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], DeleteOneCasesArgs.prototype, "where", void 0);
DeleteOneCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCasesArgs);
exports.DeleteOneCasesArgs = DeleteOneCasesArgs;
