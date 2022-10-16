"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
let DeleteOneVisitsArgs = class DeleteOneVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], DeleteOneVisitsArgs.prototype, "where", void 0);
DeleteOneVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneVisitsArgs);
exports.DeleteOneVisitsArgs = DeleteOneVisitsArgs;
