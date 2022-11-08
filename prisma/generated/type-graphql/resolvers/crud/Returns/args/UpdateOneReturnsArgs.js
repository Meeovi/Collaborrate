"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsUpdateInput_1 = require("../../../inputs/ReturnsUpdateInput");
const ReturnsWhereUniqueInput_1 = require("../../../inputs/ReturnsWhereUniqueInput");
let UpdateOneReturnsArgs = class UpdateOneReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateInput_1.ReturnsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateInput_1.ReturnsUpdateInput)
], UpdateOneReturnsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], UpdateOneReturnsArgs.prototype, "where", void 0);
UpdateOneReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReturnsArgs);
exports.UpdateOneReturnsArgs = UpdateOneReturnsArgs;
