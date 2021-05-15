using Microsoft.EntityFrameworkCore;

namespace AngularBlogCore.API.Entities
{
    public partial class UdemyAngularBlogDBContext : DbContext
    {
        public UdemyAngularBlogDBContext()
        {
        }

        public UdemyAngularBlogDBContext(DbContextOptions<UdemyAngularBlogDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>(entity =>
            {
                entity.ToTable("Article");

                entity.Property(e => e.ContentMain).IsRequired();

                entity.Property(e => e.ContentSummary)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Picture).HasMaxLength(300);

                entity.Property(e => e.PublishDate).HasColumnType("datetime");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Articles)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Article_Category");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment");

                entity.Property(e => e.ContentMain).IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Article)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.ArticleId)
                    .HasConstraintName("FK_Comment_Article");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
