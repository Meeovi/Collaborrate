"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenCreateInput_1 = require("../../../inputs/ApitokenCreateInput");
const ApitokenUpdateInput_1 = require("../../../inputs/ApitokenUpdateInput");
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
let UpsertApitokenArgs = class UpsertApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], UpsertApitokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenCreateInput_1.ApitokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenCreateInput_1.ApitokenCreateInput)
], UpsertApitokenArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenUpdateInput_1.ApitokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenUpdateInput_1.ApitokenUpdateInput)
], UpsertApitokenArgs.prototype, "update", void 0);
UpsertApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertApitokenArgs);
exports.UpsertApitokenArgs = UpsertApitokenArgs;
