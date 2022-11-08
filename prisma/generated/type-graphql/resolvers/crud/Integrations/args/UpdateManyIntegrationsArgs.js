"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsUpdateManyMutationInput_1 = require("../../../inputs/IntegrationsUpdateManyMutationInput");
const IntegrationsWhereInput_1 = require("../../../inputs/IntegrationsWhereInput");
let UpdateManyIntegrationsArgs = class UpdateManyIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsUpdateManyMutationInput_1.IntegrationsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsUpdateManyMutationInput_1.IntegrationsUpdateManyMutationInput)
], UpdateManyIntegrationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereInput_1.IntegrationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereInput_1.IntegrationsWhereInput)
], UpdateManyIntegrationsArgs.prototype, "where", void 0);
UpdateManyIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIntegrationsArgs);
exports.UpdateManyIntegrationsArgs = UpdateManyIntegrationsArgs;
