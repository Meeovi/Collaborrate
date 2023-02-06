"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIntegrationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsUpdateInput_1 = require("../../../inputs/IntegrationsUpdateInput");
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
let UpdateOneIntegrationsArgs = class UpdateOneIntegrationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsUpdateInput_1.IntegrationsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsUpdateInput_1.IntegrationsUpdateInput)
], UpdateOneIntegrationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], UpdateOneIntegrationsArgs.prototype, "where", void 0);
UpdateOneIntegrationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneIntegrationsArgs);
exports.UpdateOneIntegrationsArgs = UpdateOneIntegrationsArgs;
