"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersUpdateInput_1 = require("../../../inputs/ProvidersUpdateInput");
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
let UpdateProvidersArgs = class UpdateProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateInput_1.ProvidersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateInput_1.ProvidersUpdateInput)
], UpdateProvidersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], UpdateProvidersArgs.prototype, "where", void 0);
UpdateProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateProvidersArgs);
exports.UpdateProvidersArgs = UpdateProvidersArgs;
