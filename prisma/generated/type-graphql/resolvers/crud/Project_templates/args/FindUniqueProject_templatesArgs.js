"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let FindUniqueProject_templatesArgs = class FindUniqueProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], FindUniqueProject_templatesArgs.prototype, "where", void 0);
FindUniqueProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProject_templatesArgs);
exports.FindUniqueProject_templatesArgs = FindUniqueProject_templatesArgs;
