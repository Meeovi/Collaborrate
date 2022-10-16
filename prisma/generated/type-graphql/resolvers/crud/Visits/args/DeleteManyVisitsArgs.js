"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsWhereInput_1 = require("../../../inputs/VisitsWhereInput");
let DeleteManyVisitsArgs = class DeleteManyVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereInput_1.VisitsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsWhereInput_1.VisitsWhereInput)
], DeleteManyVisitsArgs.prototype, "where", void 0);
DeleteManyVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyVisitsArgs);
exports.DeleteManyVisitsArgs = DeleteManyVisitsArgs;
