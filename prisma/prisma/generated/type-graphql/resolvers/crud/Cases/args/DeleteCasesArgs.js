"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let DeleteCasesArgs = class DeleteCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], DeleteCasesArgs.prototype, "where", void 0);
DeleteCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCasesArgs);
exports.DeleteCasesArgs = DeleteCasesArgs;
