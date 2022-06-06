"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesWhereInput_1 = require("../../../inputs/Project_templatesWhereInput");
let DeleteManyProject_templatesArgs = class DeleteManyProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereInput_1.Project_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereInput_1.Project_templatesWhereInput)
], DeleteManyProject_templatesArgs.prototype, "where", void 0);
DeleteManyProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProject_templatesArgs);
exports.DeleteManyProject_templatesArgs = DeleteManyProject_templatesArgs;
