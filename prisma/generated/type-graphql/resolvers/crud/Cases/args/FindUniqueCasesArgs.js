"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let FindUniqueCasesArgs = class FindUniqueCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], FindUniqueCasesArgs.prototype, "where", void 0);
FindUniqueCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCasesArgs);
exports.FindUniqueCasesArgs = FindUniqueCasesArgs;
