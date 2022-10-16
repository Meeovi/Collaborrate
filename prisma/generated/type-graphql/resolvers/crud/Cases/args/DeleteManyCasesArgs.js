"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesWhereInput_1 = require("../../../inputs/CasesWhereInput");
let DeleteManyCasesArgs = class DeleteManyCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereInput_1.CasesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereInput_1.CasesWhereInput)
], DeleteManyCasesArgs.prototype, "where", void 0);
DeleteManyCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCasesArgs);
exports.DeleteManyCasesArgs = DeleteManyCasesArgs;
