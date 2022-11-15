"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVisitsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
let FindUniqueVisitsOrThrowArgs = class FindUniqueVisitsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], FindUniqueVisitsOrThrowArgs.prototype, "where", void 0);
FindUniqueVisitsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVisitsOrThrowArgs);
exports.FindUniqueVisitsOrThrowArgs = FindUniqueVisitsOrThrowArgs;
