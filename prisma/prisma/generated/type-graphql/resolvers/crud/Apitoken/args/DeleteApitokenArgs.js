"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
let DeleteApitokenArgs = class DeleteApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], DeleteApitokenArgs.prototype, "where", void 0);
DeleteApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteApitokenArgs);
exports.DeleteApitokenArgs = DeleteApitokenArgs;
