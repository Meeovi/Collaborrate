"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeUpdateInput_1 = require("../../../inputs/Core_storeUpdateInput");
const Core_storeWhereUniqueInput_1 = require("../../../inputs/Core_storeWhereUniqueInput");
let UpdateCore_storeArgs = class UpdateCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeUpdateInput_1.Core_storeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeUpdateInput_1.Core_storeUpdateInput)
], UpdateCore_storeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeWhereUniqueInput_1.Core_storeWhereUniqueInput)
], UpdateCore_storeArgs.prototype, "where", void 0);
UpdateCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCore_storeArgs);
exports.UpdateCore_storeArgs = UpdateCore_storeArgs;
