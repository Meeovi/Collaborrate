"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertEmail_templatesArgs_1 = require("./args/UpsertEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let UpsertEmail_templatesResolver = class UpsertEmail_templatesResolver {
    async upsertEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEmail_templatesArgs_1.UpsertEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertEmail_templatesResolver.prototype, "upsertEmail_templates", null);
UpsertEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], UpsertEmail_templatesResolver);
exports.UpsertEmail_templatesResolver = UpsertEmail_templatesResolver;
