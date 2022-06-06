"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeUpdateManyMutationInput_1 = require("../../../inputs/Core_storeUpdateManyMutationInput");
const Core_storeWhereInput_1 = require("../../../inputs/Core_storeWhereInput");
let UpdateManyCore_storeArgs = class UpdateManyCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeUpdateManyMutationInput_1.Core_storeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeUpdateManyMutationInput_1.Core_storeUpdateManyMutationInput)
], UpdateManyCore_storeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereInput_1.Core_storeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Core_storeWhereInput_1.Core_storeWhereInput)
], UpdateManyCore_storeArgs.prototype, "where", void 0);
UpdateManyCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCore_storeArgs);
exports.UpdateManyCore_storeArgs = UpdateManyCore_storeArgs;
