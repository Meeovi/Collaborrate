"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersWhereInput_1 = require("../../../inputs/ProvidersWhereInput");
let DeleteManyProvidersArgs = class DeleteManyProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereInput_1.ProvidersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProvidersWhereInput_1.ProvidersWhereInput)
], DeleteManyProvidersArgs.prototype, "where", void 0);
DeleteManyProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProvidersArgs);
exports.DeleteManyProvidersArgs = DeleteManyProvidersArgs;
