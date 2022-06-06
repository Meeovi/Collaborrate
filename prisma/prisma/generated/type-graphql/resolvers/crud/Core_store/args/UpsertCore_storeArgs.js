"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeCreateInput_1 = require("../../../inputs/Core_storeCreateInput");
const Core_storeUpdateInput_1 = require("../../../inputs/Core_storeUpdateInput");
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
let UpsertCore_storeArgs = class UpsertCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], UpsertCore_storeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCreateInput_1.Core_storeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeCreateInput_1.Core_storeCreateInput)
], UpsertCore_storeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeUpdateInput_1.Core_storeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeUpdateInput_1.Core_storeUpdateInput)
], UpsertCore_storeArgs.prototype, "update", void 0);
UpsertCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCore_storeArgs);
exports.UpsertCore_storeArgs = UpsertCore_storeArgs;
