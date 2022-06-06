"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsCreateInput_1 = require("../../../inputs/ShopsCreateInput");
const ShopsUpdateInput_1 = require("../../../inputs/ShopsUpdateInput");
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let UpsertShopsArgs = class UpsertShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], UpsertShopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsCreateInput_1.ShopsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsCreateInput_1.ShopsCreateInput)
], UpsertShopsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsUpdateInput_1.ShopsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsUpdateInput_1.ShopsUpdateInput)
], UpsertShopsArgs.prototype, "update", void 0);
UpsertShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertShopsArgs);
exports.UpsertShopsArgs = UpsertShopsArgs;
