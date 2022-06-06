"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesUpdateInput_1 = require("../../../inputs/CasesUpdateInput");
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let UpdateCasesArgs = class UpdateCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesUpdateInput_1.CasesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesUpdateInput_1.CasesUpdateInput)
], UpdateCasesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], UpdateCasesArgs.prototype, "where", void 0);
UpdateCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCasesArgs);
exports.UpdateCasesArgs = UpdateCasesArgs;
