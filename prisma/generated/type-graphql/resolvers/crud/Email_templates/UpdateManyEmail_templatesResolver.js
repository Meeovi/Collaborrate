"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyEmail_templatesArgs_1 = require("./args/UpdateManyEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEmail_templatesResolver = class UpdateManyEmail_templatesResolver {
    async updateManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmail_templatesArgs_1.UpdateManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEmail_templatesResolver.prototype, "updateManyEmail_templates", null);
UpdateManyEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], UpdateManyEmail_templatesResolver);
exports.UpdateManyEmail_templatesResolver = UpdateManyEmail_templatesResolver;
