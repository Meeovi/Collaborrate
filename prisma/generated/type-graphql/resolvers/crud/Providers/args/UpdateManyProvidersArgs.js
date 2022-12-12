"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersUpdateManyMutationInput_1 = require("../../../inputs/ProvidersUpdateManyMutationInput");
const ProvidersWhereInput_1 = require("../../../inputs/ProvidersWhereInput");
let UpdateManyProvidersArgs = class UpdateManyProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersUpdateManyMutationInput_1.ProvidersUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersUpdateManyMutationInput_1.ProvidersUpdateManyMutationInput)
], UpdateManyProvidersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], UpdateManyProvidersArgs.prototype, "where", void 0);
UpdateManyProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProvidersArgs);
exports.UpdateManyProvidersArgs = UpdateManyProvidersArgs;
