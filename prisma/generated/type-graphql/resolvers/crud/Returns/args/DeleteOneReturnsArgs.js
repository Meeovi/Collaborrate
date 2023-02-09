"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsWhereUniqueInput_1 = require("../../../inputs/ReturnsWhereUniqueInput");
let DeleteOneReturnsArgs = class DeleteOneReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], DeleteOneReturnsArgs.prototype, "where", void 0);
DeleteOneReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneReturnsArgs);
exports.DeleteOneReturnsArgs = DeleteOneReturnsArgs;
