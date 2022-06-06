"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesUpdateManyMutationInput_1 = require("../../../inputs/CasesUpdateManyMutationInput");
const CasesWhereInput_1 = require("../../../inputs/CasesWhereInput");
let UpdateManyCasesArgs = class UpdateManyCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesUpdateManyMutationInput_1.CasesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesUpdateManyMutationInput_1.CasesUpdateManyMutationInput)
], UpdateManyCasesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereInput_1.CasesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereInput_1.CasesWhereInput)
], UpdateManyCasesArgs.prototype, "where", void 0);
UpdateManyCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCasesArgs);
exports.UpdateManyCasesArgs = UpdateManyCasesArgs;
