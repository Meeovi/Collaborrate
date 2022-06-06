"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsUpdateInput_1 = require("../../../inputs/ReturnsUpdateInput");
const ReturnsWhereUniqueInput_1 = require("../../../inputs/ReturnsWhereUniqueInput");
let UpdateReturnsArgs = class UpdateReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateInput_1.ReturnsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateInput_1.ReturnsUpdateInput)
], UpdateReturnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], UpdateReturnsArgs.prototype, "where", void 0);
UpdateReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReturnsArgs);
exports.UpdateReturnsArgs = UpdateReturnsArgs;
