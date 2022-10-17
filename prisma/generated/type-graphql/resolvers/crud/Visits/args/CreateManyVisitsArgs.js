"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsCreateManyInput_1 = require("../../../inputs/VisitsCreateManyInput");
let CreateManyVisitsArgs = class CreateManyVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsCreateManyInput_1.VisitsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyVisitsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyVisitsArgs.prototype, "skipDuplicates", void 0);
CreateManyVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyVisitsArgs);
exports.CreateManyVisitsArgs = CreateManyVisitsArgs;
