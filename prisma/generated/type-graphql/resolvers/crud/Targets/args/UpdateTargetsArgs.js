"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsUpdateInput_1 = require("../../../inputs/TargetsUpdateInput");
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let UpdateTargetsArgs = class UpdateTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsUpdateInput_1.TargetsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsUpdateInput_1.TargetsUpdateInput)
], UpdateTargetsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], UpdateTargetsArgs.prototype, "where", void 0);
UpdateTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTargetsArgs);
exports.UpdateTargetsArgs = UpdateTargetsArgs;
